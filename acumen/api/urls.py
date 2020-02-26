from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('compare/', views.compare, name='compare'),
    path('analysis/', views.analysis, name='analysis'),
    path('login/',views.login,name='login'),    
    path('checklogin/',views.check_login,name='checklogin')
]