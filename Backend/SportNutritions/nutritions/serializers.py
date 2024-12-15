from rest_framework import serializers
from .models import Nutritions, Brand, Category, Goals

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'image', 'date_added']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'image', 'date_added']

class GoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goals
        fields = ['id', 'name', 'image', 'date_added']

class NutritionsSerializer(serializers.ModelSerializer):
    brand = BrandSerializer(read_only=True) 
    category = CategorySerializer(read_only=True)
    goal = GoalsSerializer(read_only=True)

    brand_id = serializers.PrimaryKeyRelatedField(
        queryset=Brand.objects.all(), write_only=True, source='brand'
    )
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), write_only=True, source='category'
    )
    goal_id = serializers.PrimaryKeyRelatedField(
        queryset=Goals.objects.all(), write_only=True, source='goal'
    )

    image = serializers.ListField(child=serializers.URLField()) 

    class Meta:
        model = Nutritions
        fields = [
            'id', 'name', 'price', 'brand', 'brand_id',
            'category', 'category_id', 'goal', 'goal_id',
            'image', 'video', 'description', 'extra_info', 'date_added'
        ]