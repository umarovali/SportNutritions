from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import User

class SingUpSerializers(serializers.ModelSerializer):
    phone_number = serializers.CharField(max_length=15)
    username = serializers.CharField(max_length=45)
    password = serializers.CharField(max_length=45, write_only=True)

    class Meta:
        model = User
        fields = ["phone_number", "username", "password"]

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        try:
            Token.objects.create(user=user)
        except Exception as e:
            user.delete() 
            raise serializers.ValidationError(f"Error creating user: {str(e)}")

        return user