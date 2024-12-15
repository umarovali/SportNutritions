from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import ImageUploadView, VideoUploadView

urlpatterns = [
    path('upload-image/', ImageUploadView.as_view(), name='upload-image'),
    path('upload-video/', VideoUploadView.as_view(), name='upload-video'), 
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
