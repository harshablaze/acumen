from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('compare/', views.compare, name='compare'),
    path('analysis/', views.analysis, name='analysis'),
    path('login/',views.login,name='login'),    
    path('checklogin/',views.check_login,name='checklogin'),
    path('getfaculty/',views.getfaculty,name='listfaculty'),
    path('facultymap/',views.facultymap,name='mapfaculty'),
    path('adduser/',views.createuser,name='createuser'),
    path('reconnect/',views.reconnect,name='reconnect'),
    path('getresults/',views.getresults,name='getresults')
]