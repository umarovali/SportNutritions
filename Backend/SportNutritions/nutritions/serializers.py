from rest_framework import serializers
from .models import Nutritions, Brand, Category, Goals, CartItem

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

class CartItemSerializer(serializers.ModelSerializer):
    nutritions = NutritionsSerializer(read_only=True)
    nutrition_id = serializers.PrimaryKeyRelatedField(
        queryset=Nutritions.objects.all(), write_only=True
    )    

    class Meta:
        model = CartItem
        fields = ["id", "user", "nutritions", "nutrition_id", "quantity"]
        extra_kwargs = {"user": {"read_only": True}}

    def create(self, validated_data):
        user = self.context["request"].user
        nutritions = validated_data.pop("nutrition_id")
        cart_item, created = CartItem.objects.get_or_create(
            user=user, nutritions=nutritions, defaults={"quantity": validated_data.get("quantity", 1)}
        )
        if not created:
            cart_item.quantity += validated_data.get("quantity", 1)
            cart_item.save()
        return cart_item