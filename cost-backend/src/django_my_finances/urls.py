"""
URL configuration for django_my_finances project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from categories.views import TACategoryViewSet
from transactions.views import TATransactionViewSet

from categories.views import (
    TACategoryListView, TACategoryCreateView, TACategoryUpdateView, TACategoryDeleteView,
    CategoryBudgetView
)
from transactions.views import (
    TATransactionListView, TATransactionCreateView, TATransactionUpdateView, TATransactionDeleteView
)

router = DefaultRouter()
router.register(r'apicategories', TACategoryViewSet)
router.register(r'apitransactions', TATransactionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', TACategoryListView.as_view(), name='category-list'),
    path('categories/crear/', TACategoryCreateView.as_view(), name='tacategory-create'),
    path('categories/editar/<int:pk>/', TACategoryUpdateView.as_view(), name='tacategory-update'),
    path('categories/eliminar/<int:pk>/', TACategoryDeleteView.as_view(), name='tacategory-delete'),
    path('transactions/', TATransactionListView.as_view(), name='transaction-list'),
    path('transactions/crear/', TATransactionCreateView.as_view(), name='tatransaction-create'),
    path('transactions/editar/<int:pk>/', TATransactionUpdateView.as_view(), name='tatransaction-update'),
    path('transactions/eliminar/<int:pk>/', TATransactionDeleteView.as_view(), name='tatransaction-delete'),
    path('', include(router.urls)),    
    path('categories-budget/<str:option>/', CategoryBudgetView.as_view(), name='category-budget'),
]
