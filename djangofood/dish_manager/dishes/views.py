from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Dish
from .serializers import DishSerializer

from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Dish
from .serializers import DishSerializer

class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

@api_view(['POST'])
def toggle_publish(request, id):
    dish = get_object_or_404(Dish, pk=id)
    dish.isPublished = not dish.isPublished  
    dish.save()
    serializer = DishSerializer(dish)
    return Response(serializer.data)