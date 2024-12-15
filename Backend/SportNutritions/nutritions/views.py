# views.py

from rest_framework import generics
from .models import Nutritions, Brand, Category, Goals
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import (
    NutritionsSerializer, 
    BrandSerializer, 
    CategorySerializer, 
    GoalsSerializer, 
)

class NutritionsCreateView(generics.CreateAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer
    permission_classes = [IsAuthenticated]

class NutritionsListView(generics.ListAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer
    permission_classes = [AllowAny]

class NutritionsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer
    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAuthenticated()]

class BrandCreateView(generics.CreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticated]

class BrandListView(generics.ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [AllowAny]

class BrandDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAuthenticated()]

# Category Views
class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()]
        return [IsAuthenticated()]

# Goals Views
class GoalsCreateView(generics.CreateAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
    permission_classes = [IsAuthenticated]

class GoalsListView(generics.ListAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
    permission_classes = [AllowAny]

class GoalsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
    def get_permissions(self):
        if self.request.method in ['GET']:
            return [AllowAny()] 
        return [IsAuthenticated()]