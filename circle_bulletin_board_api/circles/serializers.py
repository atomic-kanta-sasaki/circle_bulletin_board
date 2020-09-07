from rest_framework import serializers

from .models import Circles


class CircleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Circles
        fields = ('id', 'university', 'circle_name', 'email')