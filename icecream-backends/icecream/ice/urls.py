from django.urls import path
from .views import ice_cream_list
from . import views 


#from .views import githubuserview



urlpatterns = [
    path("icecreams/", views.ice_cream_list, name="ice_cream_list"),
    path('register/', views.register_user , name='register_user'),
    path('login/', views.login_user , name='login_user'),
   path('vendor/', views.vendor_user , name='vendor_user'),
  

]
