from rest_framework import generics
from .models import Users
from .serializers import Usererializer
from django.db import connection

class UserListView(generics.ListAPIView):
    queryset = Users.objects.raw('SELECT * FROM users WHERE id=2')
    serializer_class = Usererializer