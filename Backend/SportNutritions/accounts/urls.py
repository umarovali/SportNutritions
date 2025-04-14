from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path("me/", views.MeView.as_view(), name="me"),
    path("signup/", views.SingUpView.as_view(),  name="signup"),
    path("login/",views.LoginView.as_view(), name='login'),
    path('login/refresh/', TokenRefreshView.as_view(), name='jwt_refresh'),
]