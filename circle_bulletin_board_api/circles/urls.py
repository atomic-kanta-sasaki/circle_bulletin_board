from django.urls import path

from .views import CircleListView


urlpatterns = [
    path('', CircleListView.as_view()),
]