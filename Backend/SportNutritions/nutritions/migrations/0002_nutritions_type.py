# Generated by Django 5.1.3 on 2024-11-07 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutritions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='nutritions',
            name='type',
            field=models.CharField(choices=[('product', 'Product'), ('accessory', 'Accessory')], default='product', max_length=10),
        ),
    ]
