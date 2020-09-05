from rest_framework import generics
from .models import Users
from .serializers import Usererializer

class UserListView(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = Usererializer