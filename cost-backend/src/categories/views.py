from django.urls import reverse_lazy
from rest_framework import viewsets, generics
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from .models import TACategory
from .serializers import TACategorySerializer
from django.db.models import Sum, F
from rest_framework.response import Response

class TACategoryListView(ListView):
    model = TACategory
    template_name = 'tacategory_list.html'
    context_object_name = 'categories'


class TACategoryCreateView(CreateView):
    model = TACategory
    template_name = 'tacategory_form.html'
    fields = '__all__'
    success_url = reverse_lazy('category-list')
    success_message = "New transaction added succesfull"


class TACategoryUpdateView(UpdateView):
    model = TACategory
    template_name = 'tacategory_form.html'
    fields = '__all__'


class TACategoryDeleteView(DeleteView):
    model = TACategory
    template_name = 'tacategory_confirm_delete.html'
    success_url = reverse_lazy('category-list')


class TACategoryViewSet(viewsets.ModelViewSet):
    queryset = TACategory.objects.all()
    serializer_class = TACategorySerializer

    
class CategoryBudgetView(generics.ListAPIView):
    serializer_class = TACategorySerializer

    def get_queryset(self):
        option = self.kwargs.get('option')  # Obtén el valor de la URL

        if option == 'exceeded':
            return TACategory.objects.filter(tatransaction__FIAMOUNT__gt=F('FILIMIT'))
        elif option == 'not_exceeded':
            return TACategory.objects.filter(tatransaction__FIAMOUNT__lte=F('FILIMIT'))
        elif option == 'all':
            return TACategory.objects.all()
        else:
            return Response({'error': 'Invalid option'}, status=400)