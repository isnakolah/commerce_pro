from rest_framework import viewsets, permissions

from .models import Listing
from .serializers import ListingSerializer, CategorySerializer, BidSerializer, CommentSerializer


class ListingViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListingSerializer

    def get_queryset(self):
        return Listing.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
