from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser

class CustomUserManager(BaseUserManager):
    def create_user(self, phone_number, username, password=None, **extra_fields):
        if not phone_number:
            raise ValueError("The Phone Number field must be set.")
        if not username:
            raise ValueError("The Username field must be set.")

        if self.model.objects.filter(phone_number=phone_number).exists():
            raise ValueError("A user with this phone number already exists.")
        if self.model.objects.filter(username=username).exists():
            raise ValueError("A user with this username already exists.")

        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        user = self.model(phone_number=phone_number, username=username, **extra_fields)
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

        return self.create_user(phone_number=phone_number, username=username, password=password, **extra_fields)

class User(AbstractUser):
    phone_number = models.CharField(max_length=9, unique=True)
    email = None 
    username = models.CharField(max_length=45, unique=True)

    USERNAME_FIELD = 'phone_number' 
    REQUIRED_FIELDS = ['username']  

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.username} ({self.phone_number})"