from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

User = get_user_model()

def create_jwt_pair_for_user(user: User):
    refresh = RefreshToken.for_user(user)

    refresh.payload["role"] = "super-admin" if user.is_superuser else "user"

    tokens = {
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "role": refresh.payload["role"],  # Передаем роль отдельно
    }

    return tokens
