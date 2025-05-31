from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User, auth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, get_user_model
from django.conf import settings
from rest_framework.permissions import AllowAny
from rest_framework import status
import requests
import base64
from django.core.mail import send_mail
import random
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import IceCream
from .models import VerificationCode, vendorprofile
from .serializer import IceCreamSerializer, vendorserilzer
from .minio_client import upload_file
from rest_framework.parsers import MultiPartParser
import uuid

# Create your views here.


@api_view(["POST"])
def vendor_user(request):
    if request.method == "POST":
        try:
            # Handle file upload if present
            file_obj = request.FILES.get('image')
            image_url = None
            if file_obj:
                # Upload to MinIO
                content_type = file_obj.content_type
                image_url = upload_file(file_obj, content_type)
            # Prepare data for IceCream creation
            vendor_data = request.data.copy()

            if not User.objects.filter(email = vendor_data["email"], password = vendor_data["password"]).exist():
                    return Response({"error": "pls make sure u use the email and password, that was used the the registeration process"})
            # If image was uploaded, add the URL to the data

            if "password" not in vendor_data:
                return Response({"error": "password required"}, status=status.HTTP_400_BAD_REQUEST)
            

            
            user = User.object.get(email = vendor_data["email"])

            if not  user.check_password(vendor_data["password"]):
                return Response({"error": "invalid password"}, status=status.HTTP_401_UNAUTHORIZED)

            # If image was uploaded, add the URL to the data
            if image_url:
                vendor_data['image_url'] = image_url
                # Also store the filename in the image field if needed
                vendor_data['image'] = image_url.split('/')[-1]  # Extract filename from URL
            # Serialize and save
            serializer = vendorserilzer(data=vendor_data)
            if serializer.is_valid():

                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    elif request.method == "GET":
         vendors =  vendorprofile.objects.all()
         serializer = vendorserilzer(vendors, many = True)
         return Response(serializer.data)


User = get_user_model()

parser_classes = [MultiPartParser]

@api_view(["GET", "POST"])
def ice_cream_list(request):
    if request.method == "GET": #if request method is get do this
        icecreams = IceCream.objects.all()
        serializer = IceCreamSerializer(icecreams, many=True)
        return Response(serializer.data)

    elif  request.method == "POST":
         try:
            # Handle file upload if present
            file_obj = request.FILES.get('image')
            image_url = None
            if file_obj:
                # Upload to MinIO
                content_type = file_obj.content_type
                image_url = upload_file(file_obj, content_type)
            
            # Prepare data for IceCream creation
            vendordata = request.data.copy()

            
            if image_url:
                vendordata['image_url'] = image_url
                # Also store the filename in the image field if needed
                vendordata['image'] = image_url.split('/')[-1]  # Extracts filename from URL
            
            serializer = vendorserilzer(data=vendordata)
            if serializer.is_valid():
                
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
         except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(["GET", 'POST',])
def register_user(request):
      if request.method == "POST":
             
             username = request.data.get('username')
             email = request.data.get('email')
             password = request.data.get('password')
             verification_code = request.data.get('verification_code')
             if not all([username, email, password]):
                return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)
             if User.objects.filter(email=email).exists():
                return Response({"error":'Email already exists'}, status=400)
             if User.objects.filter(username=username).exists():
                return Response({"error":'user already exists'}, status=400) 
             if not verification_code:
                return send_verification_code(email)
             return verify_and_register(username, email, password, verification_code)
      elif  request.method == "GET":
          users =  User.objects.all()
          return Response(users.data)
          
          

      
def send_verification_code(email):
    """Helper function to send verification code"""
    # Generate a 6-digit code
    code = ''.join([str(random.randint(0, 9)) for _ in range(6)])
    
    # Save the code (without creating a user yet)
    verification_code, created = VerificationCode.objects.update_or_create(
        email=email,  # We use email as identifier since user doesn't exist yet
        defaults={'code': code, 'is_used': False}
    )
    
    # Send email (using Django's built-in email backend)
    subject = 'Your Account Verification Code'
    message = f'Your verification code is: {code}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    
    try:
        send_mail(subject, message, email_from, recipient_list)
        return Response({
            "message": "Verification code sent to your email",
            "next_step": "Submit the code to complete registration"
        }, status=status.HTTP_200_OK)
    except Exception as e:
        print("Email send failed:", str(e))
        return Response({"error": f"Failed to send verification code: {str(e)}"}, 
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)
     

def verify_and_register(username, email, password, verification_code):

    """Helper function to verify code and register user"""
    try:
        # Check verification code
        verification = VerificationCode.objects.get(
            email=email,
            code=verification_code,
            is_used=False
        )
    except VerificationCode.DoesNotExist:
        return Response({"error": "Invalid or expired verification code"}, 
                       status=status.HTTP_400_BAD_REQUEST)
    
    # Mark code as used
    verification.is_used = True
    verification.save()
    
    # Create the user
    try:
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        user.is_verified = True  # Assuming you have this field
        user.save()
        
        return Response({
            "message": "User registered successfully",
            "user_id": user.id
        }, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": f"Failed to create user: {str(e)}"}, 
                       status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = auth.authenticate(username=username, password=password) # if the user credentaials is equal to the ones in the register then log them in
    if user is not None: #if the user creadentails exixts
        token, _ = Token.objects.get_or_create(user=user) #create a token so that users wont have to always log in  
        return Response({"token": token.key,  "message":'Login successful'}, status=status.HTTP_200_OK) #log them in and show them their token            
    else:
        return Response({"error":'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST) #else return a message to them telling them wrong credentails
           


# utils/email.py
import smtplib
import socket
from django.conf import settings

def send_secure_email(subject, message, recipient):
    try:
        # Attempt primary SMTP connection
        with smtplib.SMTP(settings.EMAIL_HOST, settings.EMAIL_PORT, timeout=10) as server:
            server.starttls()
            server.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)
            server.sendmail(settings.EMAIL_HOST_USER, [recipient], f"Subject: {subject}\n\n{message}")
        return True
    
    except socket.timeout:
        print("⚠️ Connection timeout - Trying SSL fallback...")
        try:
            # Fallback to SSL
            with smtplib.SMTP_SSL(settings.EMAIL_HOST, 465, timeout=10) as server:
                server.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)
                server.sendmail(settings.EMAIL_HOST_USER, [recipient], f"Subject: {subject}\n\n{message}")
            return True
        except Exception as e:
            print(f"SSL fallback failed: {e}")
            return False
            
    except Exception as e:
        print(f"Email sending failed: {e}")
        return False
    


