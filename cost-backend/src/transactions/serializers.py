from rest_framework import serializers
from .models import TATransaction
from categories.models import TACategory

class TATransactionSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True,source='FIIDTRANSACTION')
    description = serializers.CharField(source='FCDESCRIPTION')
    category = serializers.PrimaryKeyRelatedField(queryset=TACategory.objects.all(), source='FIIDCATEGORIE')
    amount = serializers.DecimalField(source='FIAMOUNT', max_digits=10, decimal_places=2)
    date = serializers.DateTimeField(source='created')
    ignore = serializers.BooleanField(source='FBIGNORE')
    
    class Meta:
        model = TATransaction
        fields = ['id', 'description', 'category', 'amount', 'date', 'ignore']
