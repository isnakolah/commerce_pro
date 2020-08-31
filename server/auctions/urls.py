from rest_framework import routers

from .api import ListingViewSet

router = routers.DefaultRouter()
router.register('api/listings', ListingViewSet, 'listing')

urlpatterns = router.urls
