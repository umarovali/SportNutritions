from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.

class AccessCategroy(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(max_length=500, null=False, blank=False)
    date_added = models.DateTimeField(auto_now_add=True)

class Accessories(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(null=True, blank=True)
    image = models.JSONField(default=list)
    video = models.URLField(max_length=500, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    accessoriesCategroy = models.ForeignKey('AccessCategroy', on_delete=models.CASCADE, related_name='accessories', null=True)

    def __str__(self):
        return self.name


class CartItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="accessories_cart_items")
    accessories = models.ForeignKey(Accessories, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        unique_together = ('user', 'accessories')