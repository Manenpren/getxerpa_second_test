from rest_framework import serializers
from .models import TACategory

class TACategorySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='FIIDCATEGORIE')
    name = serializers.CharField(source='FCNAME')
    limit = serializers.DecimalField(source='FILIMIT', max_digits=10, decimal_places=2)


    class Meta:
        model = TACategory
        fields = ['name', 'limit']


