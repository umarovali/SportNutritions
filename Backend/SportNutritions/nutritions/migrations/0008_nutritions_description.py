# Generated by Django 5.1.3 on 2024-11-17 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nutritions', '0007_alter_brand_image_alter_category_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='nutritions',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]