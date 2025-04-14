from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Nutritions, Brand, Category, Goals, CartItem
from accessories.models import Accessories
from accessories.serializers import AccessoriesSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .serializers import (
    NutritionsSerializer, 
    BrandSerializer, 
    CategorySerializer, 
    GoalsSerializer, 
    CartItemSerializer,
)

class CartView(generics.ListCreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CartClearView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        CartItem.objects.filter(user=request.user).delete()
        return Response({"message": "Корзина очищена"}, status=204)

class CartItemDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, nutrition_id):
        nutritions = Nutritions.objects.filter(id=nutrition_id).first()

        if not nutritions:
            return Response({"error": "Продукт не найден"}, status=status.HTTP_404_NOT_FOUND)
        
        cart_item = CartItem.objects.filter(user=request.user, nutritions=nutritions).first()

        if cart_item:
            cart_item.delete()
            return Response({"message": "Товар удален из корзины"}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Товар не найден в вашей корзине"}, status=status.HTTP_404_NOT_FOUND)

class CommonSearchView(APIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('q', '').strip()
        min_price = request.GET.get('min_price')
        max_price = request.GET.get('max_price')
        brand_id = request.GET.get('brand_id')
        category_id = request.GET.get('category_id')
        goal_id = request.GET.get('goal_id')

        if not query and not any([min_price, max_price, brand_id, category_id, goal_id]):
            return Response({"accessories": [], "nutrition": []})

        accessories_queryset = Accessories.objects.all()
        nutrition_queryset = Nutritions.objects.all()

        if query:
            accessories_queryset = accessories_queryset.filter(name__icontains=query)
            nutrition_queryset = nutrition_queryset.filter(name__icontains=query)

        if min_price:
            accessories_queryset = accessories_queryset.filter(price__gte=min_price)
            nutrition_queryset = nutrition_queryset.filter(price__gte=min_price)

        if max_price:
            accessories_queryset = accessories_queryset.filter(price__lte=max_price)
            nutrition_queryset = nutrition_queryset.filter(price__lte=max_price)

        if brand_id:
            nutrition_queryset = nutrition_queryset.filter(brand_id=brand_id)
        if category_id:
            nutrition_queryset = nutrition_queryset.filter(category_id=category_id)
        if goal_id:
            nutrition_queryset = nutrition_queryset.filter(goal_id=goal_id)

        accessories_serializer = AccessoriesSerializer(accessories_queryset, many=True)
        nutrition_serializer = NutritionsSerializer(nutrition_queryset, many=True)

        return Response({
            "accessories": accessories_serializer.data,
            "nutrition": nutrition_serializer.data,
        })

class NutritionsCreateView(generics.CreateAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer
    permission_classes = [IsAuthenticated]

class NutritionsListView(generics.ListAPIView):
    queryset = Nutritions.objects.all()
    serializer_class = NutritionsSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['goal', 'brand', 'category'] 

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