from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'number']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    number = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        number = data.get('number')

        # Ищем пользователя по username и number
        user = User.objects.filter(username=username, number=number).first()

        if user and user.check_password(password):  # Проверяем пароль
            refresh = RefreshToken.for_user(user)  # Генерируем токены
            return {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }

        raise serializers.ValidationError("Неверные данные для входа")