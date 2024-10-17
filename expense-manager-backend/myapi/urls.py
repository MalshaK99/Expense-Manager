from django.contrib import admin
from django.urls import path, include
from . import views
from .views import change_password, update_user_details, validate_signup, ProfileView, get_user_details
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'member',views.MemberView, 'member')
router.register(r'category',views.CategoriesView, 'category')
router.register(r'income',views.IncomeView, 'income')
router.register(r'expense',views.ExpenseView, 'expense')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # path('get/', views.hello_world, name='hello_world'),
    # path('<int:pk>/', views.DetailTodo.as_view()),
    path('validate_signup', views.validate_signup, name='validate_signup'),
    path('profileview/', views.ProfileView.as_view(), name="profileview"),
    
    path('get_user_details/', get_user_details, name='get_user_details'),
    path('update_user_details/', update_user_details, name='update_user_details'),
     path('change_password/', change_password, name='change_password')

]
