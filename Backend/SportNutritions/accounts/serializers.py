from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import User

class SingUpSerializers(serializers.ModelSerializer):
    phone_number = serializers.CharField(max_length=15)
    username = serializers.CharField(max_length=125)
    password = serializers.CharField(max_length=128, write_only=True)

    birth_date = serializers.DateField(required=False, allow_null=True)
    gender = serializers.ChoiceField(choices=User.GENDER_CHOICES, required=False)
    address = serializers.CharField(required=False, allow_blank=True, allow_null=True)
    avatar = serializers.CharField(required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = User
        fields = ["phone_number", "username", "password", "birth_date", "gender", "address", "avatar"]

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