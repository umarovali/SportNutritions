# views.py

from rest_framework import generics
from .models import Nutritions, Brand, Category, Goals
from .serializers import (
    NutritionsSerializer, 
    NutritionsReadSerializer,
    BrandSerializer, 
    CategorySerializer, 
    GoalsSerializer, 
    NutritionsReadSerializer
)

class NutritionsCreateView(generics.CreateAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer

class NutritionsListView(generics.ListAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer  # Используйте сериализатор без `extra_info`

class NutritionsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nutritions.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return NutritionsReadSerializer  # Используйте сериализатор с `extra_info` для получения данных
        return NutritionsSerializer
# Brand Views
class BrandCreateView(generics.CreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class BrandListView(generics.ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class BrandDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

# Category Views
class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Goals Views
class GoalsCreateView(generics.CreateAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer

class GoalsListView(generics.ListAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer

class GoalsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer