from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

class Brand(models.Model):
    name = models.CharField(max_length=250)
    image = models.URLField(max_length=500, null=False, blank=False, default="") 
    date_added = models.DateTimeField(auto_now_add=True, null=True)  
    
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=250)
    image = models.URLField(max_length=500, null=False, blank=False, default="") 
    date_added = models.DateTimeField(auto_now_add=True, null=True)  

    def __str__(self):
        return self.name

class Goals(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(max_length=500, null=False, blank=False, default="")  
    date_added = models.DateTimeField(auto_now_add=True, null=True)  

    def __str__(self):
        return self.name
    
class Nutritions(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(null=True, blank=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='nutritions', null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='nutritions', null=True)
    goal = models.ForeignKey(Goals, on_delete=models.CASCADE, related_name='nutritions', null=True)
    image = models.JSONField(default=list)  
    video = models.URLField(max_length=500, null=True, blank=True) 
    extra_info = models.JSONField(null=True, blank=True) 
    date_added = models.DateTimeField(auto_now_add=True, null=True)  
    
    def __str__(self):
        return self.name
    
class CartItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="nutritions_cart_items")
    nutritions = models.ForeignKey(Nutritions, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        unique_together = ('user', 'nutritions')