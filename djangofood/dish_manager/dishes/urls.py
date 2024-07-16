from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DishViewSet
from . import views

router = DefaultRouter()
router.register(r'dishes', DishViewSet)

urlpatterns = [
    path('', include(router.urls)),
        path('dishes/<int:id>/toggle_publish/', views.toggle_publish, name='toggle_publish'),

]
