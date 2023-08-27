from django.db import models
from django_extensions.db.models import TimeStampedModel
from django.db.models import Sum

class TACategory(TimeStampedModel):
    FIIDCATEGORIE = models.AutoField(primary_key=True)
    FCNAME = models.CharField(max_length=100)
    FILIMIT = models.DecimalField(max_digits=10, decimal_places=2)


class TACategoryLog(models.Model):
    category = models.ForeignKey(TACategory, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # ... other log fields


