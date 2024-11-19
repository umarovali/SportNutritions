from rest_framework import serializers
from .models import Nutritions, Brand, Category, Goals

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'image']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'image']

class GoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goals
        fields = ['id', 'name', 'image']

class NutritionsSerializer(serializers.ModelSerializer):
    brand = serializers.PrimaryKeyRelatedField(queryset=Brand.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    goal = serializers.PrimaryKeyRelatedField(queryset=Goals.objects.all())
    extra_info = serializers.JSONField(required=False)  # добавьте это

    class Meta:
        model = Nutritions
        fields = ['id', 'name', 'price', 'brand', 'category', 'goal', 'image', 'description', 'extra_info']

class NutritionsReadSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    category = CategorySerializer()
    goal = GoalsSerializer()
    extra_info = serializers.JSONField()  # убедитесь, что это поле включено

    class Meta:
        model = Nutritions
        fields = ['id', 'name', 'price', 'brand', 'category', 'goal', 'image', 'description', 'extra_info']