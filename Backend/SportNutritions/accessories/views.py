from rest_framework import generics
from .models import AccessCategroy, Accessories, CartItem
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import AccessCategroySerializer, AccessoriesSerializer, CartItemSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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

    def delete(self, request, accessories_id):
        accessories = Accessories.objects.filter(id=accessories_id).first()

        if not accessories:
            return Response({"error": "Продукт не найден"}, status=status.HTTP_404_NOT_FOUND)
        
        cart_item = CartItem.objects.filter(user=request.user, accessories=accessories).first()

        if cart_item:
            cart_item.delete()
            return Response({"message": "Товар удален из корзины"}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Товар не найден в вашей корзине"}, status=status.HTTP_404_NOT_FOUND)
        
class AccessoriesCreateView(generics.CreateAPIView):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer

class AccessoriesListView(generics.ListAPIView):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer
    filter_backends = [DjangoFilterBackend] 
    filterset_fields = ['accessoriesCategroy'] 

class AccessoriesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer


class AccessCategroyCreateView(generics.CreateAPIView):
    queryset = AccessCategroy.objects.all()
    serializer_class = AccessCategroySerializer

class AccessCategroyListView(generics.ListAPIView):
    queryset = AccessCategroy.objects.all()
    serializer_class = AccessCategroySerializer

class AccessCategroyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AccessCategroy.objects.all()
    serializer_class = AccessCategroySerializer