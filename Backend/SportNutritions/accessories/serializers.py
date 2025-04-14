from rest_framework import serializers
from .models import AccessCategroy, Accessories, CartItem

class AccessCategroySerializer(serializers.ModelSerializer):

    class Meta:
        model = AccessCategroy
        fields = ['id', 'name', 'image', 'date_added']



class AccessoriesSerializer(serializers.ModelSerializer):
    accessoriesCategroy = AccessCategroySerializer(read_only=True)

    accessoriesCategroy_id = serializers.PrimaryKeyRelatedField(
        queryset=AccessCategroy.objects.all(), write_only=True, source='accessoriesCategroy'
    )

    image = serializers.ListField(child=serializers.URLField())

    class Meta:
        model = Accessories
        fields = ['id', 'name', 'price', 'description', 'image', 'video', 'accessoriesCategroy', 'accessoriesCategroy_id']


class CartItemSerializer(serializers.ModelSerializer):
    accessories = AccessoriesSerializer(read_only=True)
    accessories_id = serializers.PrimaryKeyRelatedField(
        queryset=Accessories.objects.all(), write_only=True
    )    

    class Meta:
        model = CartItem
        fields = ["id", "user", "accessories", "accessories_id", "quantity"]
        extra_kwargs = {"user": {"read_only": True}}

    def create(self, validated_data):
        user = self.context["request"].user
        accessories = validated_data.pop("accessories_id")
        cart_item, created = CartItem.objects.get_or_create(
            user=user, accessories=accessories, defaults={"quantity": validated_data.get("quantity", 1)}
        )
        if not created:
            cart_item.quantity += validated_data.get("quantity", 1)
            cart_item.save()
        return cart_item