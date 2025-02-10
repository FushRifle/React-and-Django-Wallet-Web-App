from django.urls import path
from .views import dashboard, statistics, mycards, profile, scan

urlpatterns = [
    path('dashboard/', dashboard, name='dashboard'),
    path('statistics/', statistics, name='statistics'),
    path('mycards/', mycards, name='mycards'),
    path('profile/', profile, name='profile'),
    path('scan/', scan, name='scan'),
]
