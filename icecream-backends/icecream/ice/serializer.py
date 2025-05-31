from rest_framework import serializers
from .models import IceCream, vendorprofile
class IceCreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = IceCream
        fields = "__all__"
        extra_kwargs = {
            'image_url': {'required': False},
            'image': {'required': False}
        }

class vendorserilzer(serializers.ModelSerializer):
    model = vendorprofile
    fields = "__all__"
    extra_kwags = {
        "image_url": {"required": False},
        "image": {"required": False}
    }

