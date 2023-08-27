from django.db import models
from django_extensions.db.models import TimeStampedModel
from categories.models import TACategory

class TATransaction(TimeStampedModel):
    FIIDTRANSACTION = models.AutoField(primary_key=True)
    FCDESCRIPTION = models.TextField()
    FIIDCATEGORIE = models.ForeignKey(TACategory, on_delete=models.CASCADE)
    FIAMOUNT = models.DecimalField(max_digits=10, decimal_places=2)
    FBIGNORE = models.BooleanField()
    
class TATransactionLog(models.Model):
    transaction = models.ForeignKey(TATransaction, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # ... other log fields    