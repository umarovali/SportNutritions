from django.urls import path
from .views import (
    NutritionsCreateView, NutritionsListView, NutritionsDetailView,
    BrandCreateView, BrandListView, BrandDetailView,
    CategoryCreateView, CategoryListView, CategoryDetailView,
    GoalsCreateView, GoalsListView, GoalsDetailView
)

urlpatterns = [
    # Nutritions URLs
    path('nutrition/', NutritionsListView.as_view(), name='nutrition-list'),
    path('nutrition/create/', NutritionsCreateView.as_view(), name='nutrition-create'),
    path('nutrition/<int:pk>/', NutritionsDetailView.as_view(), name='nutrition-detail'),

    # Brand URLs
    path('brand/', BrandListView.as_view(), name='brand-list'),
    path('brand/create/', BrandCreateView.as_view(), name='brand-create'),
    path('brand/<int:pk>/', BrandDetailView.as_view(), name='brand-detail'),  

    # Category URLs
    path('category/', CategoryListView.as_view(), name='category-list'),
    path('category/create/', CategoryCreateView.as_view(), name='category-create'),
    path('category/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),  

    # Goals URLs
    path('goals/', GoalsListView.as_view(), name='goals-list'),
    path('goals/create/', GoalsCreateView.as_view(), name='goals-create'),
    path('goals/<int:pk>/', GoalsDetailView.as_view(), name='goals-detail'),
]