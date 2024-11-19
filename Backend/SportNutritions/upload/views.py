from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import ImageUpload
from .serializers import ImageUploadSerializer

class ImageUploadView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            image_url = request.build_absolute_uri(serializer.data['image'])
            return Response(
                {"image_url": image_url},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
