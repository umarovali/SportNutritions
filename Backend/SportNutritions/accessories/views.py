from rest_framework import generics
from .models import AccessCategroy, Accessories
from .serializers import AccessCategroySerializer, AccessoriesSerializer

class AccessoriesCreateView(generics.CreateAPIView):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer

class AccessoriesListView(generics.ListAPIView):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer

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