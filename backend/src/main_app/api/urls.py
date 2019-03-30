from django.urls import path

from .views import FacilityListView, FacilityDetailView


urlpatterns = [
    path('', FacilityListView.as_view()),
    path('<pk>', FacilityDetailView.as_view()),
]