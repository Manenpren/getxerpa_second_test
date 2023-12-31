# Generated by Django 4.2.4 on 2023-08-27 03:18

from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0002_remove_tatransactionlog_transaction_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TATransaction',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('FIIDTRANSACTION', models.AutoField(primary_key=True, serialize=False)),
                ('FCDESCRIPTION', models.TextField()),
                ('FIAMOUNT', models.DecimalField(decimal_places=2, max_digits=10)),
                ('FBIGNORE', models.BooleanField()),
                ('FIIDCATEGORIE', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.tacategory')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TATransactionLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('transaction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transactions.tatransaction')),
            ],
        ),
    ]
