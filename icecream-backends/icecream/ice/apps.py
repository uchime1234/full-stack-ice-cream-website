from django.apps import AppConfig


class IceConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'ice'


def ready(self):
        from .minio_client import configure_bucket_policy
        configure_bucket_policy()