from django.db import models

# Create your models here.
class IceCream(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    location = models.CharField(max_length=100)
    vendor = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image_url = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class VerificationCode(models.Model):
    email = models.EmailField()  # Changed from user to email
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.email}"     


class vendorprofile(models.Model):
    vendor_name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    email = models.EmailField()
    nin = models.IntegerField()
    password = models.CharField(max_length=40)
    image = models.CharField(max_length=50)
    image_url = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return f"{self.vendor_name}"


