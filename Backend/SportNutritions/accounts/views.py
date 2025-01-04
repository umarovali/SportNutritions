from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from .models import User

class MeView(APIView):
    permission_classes = [IsAuthenticated]  # Только для аутентифицированных пользователей

    def get(self, request):
        user = request.user
        if not user.is_authenticated:
            return Response({
                'detail': 'User not found',
                'code': 'user_not_found'
            }, status=status.HTTP_404_NOT_FOUND)
        
        return Response({
            'id': user.id,
            'username': user.username,
            'number': user.number
        })

class RegisterView(CreateAPIView):
    serializer_class = UserSerializer

class LoginView(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response({"error": "Неверные данные для входа"}, status=status.HTTP_400_BAD_REQUEST)