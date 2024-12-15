from rest_framework import serializers
from .models import AccessCategroy, Accessories

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