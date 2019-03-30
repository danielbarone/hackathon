from rest_framework.generics import ListAPIView, RetrieveAPIView

from main_app.models import Facility
from .serializers import FacilitySerializer

class FacilityListView(ListAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer



class FacilityDetailView(RetrieveAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer