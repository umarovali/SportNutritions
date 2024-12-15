from django.urls import path
from .views import AccessoriesCreateView, AccessoriesListView, AccessoriesDetailView, AccessCategroyCreateView, AccessCategroyListView, AccessCategroyDetailView

urlpatterns = [
    # Accessories URLs
    path('accessories/', AccessoriesListView.as_view(), name='accessories-list'),
    path('accessories/create/', AccessoriesCreateView.as_view(), name='accessories-create'),
    path('accessories/<int:pk>/', AccessoriesDetailView.as_view(), name='accessories-detail'),
    
    # AccessCategroy URLs
    path('access/category/', AccessCategroyListView.as_view(), name='accescategory-list'),
    path('access/category/create/', AccessCategroyCreateView.as_view(), name='accescategory-create'),
    path('access/category/<int:pk>/', AccessCategroyDetailView.as_view(), name='accescategory-detail'),
]