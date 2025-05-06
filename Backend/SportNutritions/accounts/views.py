from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import APIView
from rest_framework.request import Request
from django.contrib.auth import authenticate
from .tokens import create_jwt_pair_for_user
from .serializers import SingUpSerializers, UploadedImageSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password
from .models import UploadedImage
from rest_framework.parsers import MultiPartParser, FormParser


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user  
        serializer = SingUpSerializers(user)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        data = request.data.copy()

        if "password" in data:
            data["password"] = make_password(data["password"])

        serializer = SingUpSerializers(user, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User data updated successfully", "data": serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class SingUpView(generics.GenericAPIView):
    serializer_class = SingUpSerializers

    def post(self, request: Request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {
                "message": "User Created Successfully",
                "data": serializer.data,
            }
            return Response(data=response, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request: Request):
        phone_number = request.data.get('phone_number')
        password = request.data.get('password')
        user = authenticate(phone_number=phone_number, password=password)

        if user is not None:
            tokens = create_jwt_pair_for_user(user)
            response = {
                "message": "Login Successful",
                "token": tokens,
            }
            return Response(data=response, status=status.HTTP_200_OK)
        return Response(data={"message": "Invalid phone number or password"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request: Request):
        content = {"user": str(request.user), "auth": str(request.auth)}
        return Response(data=content, status=status.HTTP_200_OK)
    

from rest_framework import status, generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import UploadedImage
from .serializers import UploadedImageSerializer

class UploadImageView(generics.CreateAPIView):
    queryset = UploadedImage.objects.all()
    serializer_class = UploadedImageSerializer
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        if response.status_code == 201:
            file_url = request.build_absolute_uri(response.data['image'])
            return Response({
                'success': True,
                'image_url': file_url
            }, status=status.HTTP_201_CREATED)
        return response

    queryset = UploadedImage.objects.all()
    serializer_class = UploadedImageSerializer
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        if response.status_code == 201:
            image_url = request.build_absolute_uri(response.data['image'])
            return Response({
                'success': True,
                'image_url': image_url
            }, status=status.HTTP_201_CREATED)
        return response