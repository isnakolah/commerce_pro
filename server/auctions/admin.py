from django.contrib import admin

from .models import Listing, Category

admin.site.register(Listing)
admin.site.register(Category)
