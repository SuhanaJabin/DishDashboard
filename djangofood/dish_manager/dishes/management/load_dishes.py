import json
from django.core.management.base import BaseCommand
from dishes.models import Dish

class Command(BaseCommand):
    help = 'Load dishes from a JSON file'

    def handle(self, *args, **kwargs):
        with open('dishes.json') as f:
            dishes = json.load(f)
            for dish in dishes:
                Dish.objects.create(
                    dishId=dish['dishId'],
                    dishName=dish['dishName'],
                    imageUrl=dish['imageUrl'],
                    isPublished=dish['isPublished']
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded dishes'))
