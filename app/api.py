from tastypie.resources import ModelResource
from app.models import LocationModel


class LocationResource(ModelResource):
    class Meta:
        queryset = LocationModel.objects.all()
        resource_name = 'location'
