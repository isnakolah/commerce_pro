import datetime

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=30, unique=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Listing(models.Model):
    title = models.CharField(max_length=200)
    start_price = models.DecimalField(max_digits=7, decimal_places=2)
    date_added = models.DateTimeField(auto_now_add=True, verbose_name='date')
    expiry_date = models.DateTimeField(
        auto_now=False, auto_now_add=False, blank=False, null=False)
    description = models.TextField()
    category = models.ManyToManyField(Category)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-expiry_date']

    # def highest_bid(self):
    #     '''
    #     Function that returns the highest bid
    #     '''
    #     try:
    #         bid = self.bid_set.all()[0]
    #     except:
    #         bid = {'amount': 0}
    #     return bid


class Bid(models.Model):
    amount = models.DecimalField(max_digits=7, decimal_places=2, null=False)
    date_bid = models.DateTimeField(auto_now_add=True, verbose_name='date')
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, null=False)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=False)

    class Meta:
        ordering = ['-amount']

    def __str__(self):
        return f'{self.user.email} bid {self.amount} on {self.listing}'


class Comment(models.Model):
    content = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True, verbose_name='date')
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, null=False)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=False)

    def __str__(self):
        return self.content
