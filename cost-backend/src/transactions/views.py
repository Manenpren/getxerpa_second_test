from .models import TATransaction
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from rest_framework import viewsets
from .serializers import TATransactionSerializer

class TATransactionListView(ListView):
    model = TATransaction
    template_name = 'tatransaction_list.html'
    context_object_name = 'transactions'


class TATransactionCreateView(CreateView):
    model = TATransaction
    template_name = 'tatransaction_form.html'
    fields = ['description', 'category', 'amount', 'date', 'ignore']
    success_url = reverse_lazy('transaction-list')
    success_message = "New transaction added succesfull"


class TATransactionUpdateView(UpdateView):
    model = TATransaction
    template_name = 'tatransaction_form.html'
    fields = '__all__'


class TATransactionDeleteView(DeleteView):
    model = TATransaction
    template_name = 'tatransaction_confirm_delete.html'
    success_url = reverse_lazy('transaction-list')

class TATransactionViewSet(viewsets.ModelViewSet):
    queryset = TATransaction.objects.all()
    serializer_class = TATransactionSerializer