from django.db import models

# Create your models here.
class Circles(models.Model):
    university=  models.TextField()
    circle_name = models.CharField(max_length=32)
    email = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'circles'