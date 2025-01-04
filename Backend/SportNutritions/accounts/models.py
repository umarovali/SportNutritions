from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.core.exceptions import ValidationError

class UserManager(BaseUserManager):
    def create_user(self, username, password=None, number=None):
        if not username:
            raise ValueError("Пользователь должен иметь имя пользователя")
        if not number:
            raise ValueError("Пользователь должен иметь номер телефона")
        user = self.model(username=username, number=number)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, number=None):
        user = self.create_user(username=username, password=password, number=number)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True 
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    username = models.CharField(max_length=50, unique=True)
    number = models.CharField(max_length=9, unique=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['number']
    
    def clean(self):
        if User.objects.filter(number=self.number).exists():
            raise ValidationError("Этот номер телефона уже используется.")

    def __str__(self):
        return self.username