from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import APIView
from rest_framework.request import Request
from django.contrib.auth import authenticate
from .tokens import create_jwt_pair_for_user
from .serializers import SingUpSerializers
from rest_framework.permissions import IsAuthenticated

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user  # Текущий пользователь на основе токена
        serializer = SingUpSerializers(user)
        return Response(serializer.data)

class SingUpView(generics.GenericAPIView):
    serializer_class = SingUpSerializers
    permission_classes = [permissions.AllowAny]

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
    permission_classes = []

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