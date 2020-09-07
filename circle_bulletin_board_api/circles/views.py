from rest_framework import generics
from .models import Circles
from .serializers import CircleSerializer
from django.db import connection

class CircleListView(generics.ListAPIView):
    queryset = Circles.objects.raw('SELECT * FROM circles WHERE id=2')
    serializer_class = CircleSerializer