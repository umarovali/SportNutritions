from django.db import models

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
