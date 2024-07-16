from django.db import models

class Dish(models.Model):
    dishId = models.CharField(max_length=100, unique=True)
    dishName = models.CharField(max_length=255)
    imageUrl = models.URLField(max_length=200)
    isPublished = models.BooleanField(default=True)

    def __str__(self):
        return self.dishName
