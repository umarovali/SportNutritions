from django.urls import path
from .views import AccessoriesCreateView, AccessoriesListView, AccessoriesDetailView, AccessCategroyCreateView, AccessCategroyListView, AccessCategroyDetailView, CartView, CartItemDeleteView, CartClearView

urlpatterns = [
    # Accessories URLs
    path('accessories/', AccessoriesListView.as_view(), name='accessories-list'),
    path('accessories/create/', AccessoriesCreateView.as_view(), name='accessories-create'),
    path('accessories/<int:pk>/', AccessoriesDetailView.as_view(), name='accessories-detail'),
    
    # AccessCategroy URLs
    path('access/category/', AccessCategroyListView.as_view(), name='accescategory-list'),
    path('access/category/create/', AccessCategroyCreateView.as_view(), name='accescategory-create'),
    path('access/category/<int:pk>/', AccessCategroyDetailView.as_view(), name='accescategory-detail'),
        # cart
    path("accessories/cart/", CartView.as_view(), name="cart"),
    path("accessories/cart/<int:accessories_id>/", CartItemDeleteView.as_view(), name="cart-item-delete"),
    path("accessories/cart/clear/", CartClearView.as_view(), name="cart-clear"),
]