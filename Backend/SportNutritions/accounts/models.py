from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser

class CustomUserManager(BaseUserManager):
    def create_user(self, phone_number, password, **extra_fields):
        if not phone_number:
            raise ValueError("The Phone Number field must be set.")
        user = self.model(phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, username, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser has to have is_staff set to True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser has to have is_superuser set to True.")

        if not username:
            raise ValueError("The Username field must be set for superuser.")

        return self.create_user(phone_number=phone_number, username=username, password=password, **extra_fields)

class User(AbstractUser):
    phone_number = models.CharField(max_length=9, unique=True)
    email = None  # Убираем email, если не требуется
    username = models.CharField(max_length=45, unique=True)

    USERNAME_FIELD = 'phone_number' 
    REQUIRED_FIELDS = ['username']  

    objects = CustomUserManager()

    def __str__(self):
        return self.phone_number