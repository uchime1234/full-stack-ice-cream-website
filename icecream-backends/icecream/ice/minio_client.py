from minio import Minio
from minio.error import S3Error
from django.conf import settings
import uuid
import logging

# Configure logging
logger = logging.getLogger(__name__)

def get_minio_client():
    """Initialize MinIO client with configuration from Django settings."""
    try:
        return Minio(
            settings.MINIO_ENDPOINT,
            access_key=settings.MINIO_ACCESS_KEY,
            secret_key=settings.MINIO_SECRET_KEY,
            secure=settings.MINIO_SECURE
        )
    except Exception as e:
        logger.error(f"Failed to initialize MinIO client: {str(e)}")
        return None

def upload_file(file_obj, content_type):
    """
    Upload a file to MinIO and return its URL.
    Returns None if MinIO is unavailable or an error occurs.
    """
    minio_client = get_minio_client()
    if not minio_client:
        logger.warning("MinIO client not available, skipping file upload")
        return None

    try:
        # Ensure bucket exists
        if not minio_client.bucket_exists(settings.MINIO_BUCKET_NAME):
            minio_client.make_bucket(settings.MINIO_BUCKET_NAME)

        # Generate unique filename
        file_extension = file_obj.name.split('.')[-1] if '.' in file_obj.name else ''
        filename = f"{uuid.uuid4()}.{file_extension}" if file_extension else f"{uuid.uuid4()}"

        # Upload file to MinIO
        file_size = file_obj.size
        minio_client.put_object(
            settings.MINIO_BUCKET_NAME,
            filename,
            file_obj,
            file_size,
            content_type=content_type
        )

        # Generate URL
        file_url = f"http://{settings.MINIO_ENDPOINT}/{settings.MINIO_BUCKET_NAME}/{filename}"
        return file_url

    except S3Error as e:
        logger.error(f"MinIO S3 error during file upload: {str(e)}")
        return None
    except Exception as e:
        logger.error(f"Unexpected error during file upload: {str(e)}")
        return None