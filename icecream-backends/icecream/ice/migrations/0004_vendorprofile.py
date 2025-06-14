# Generated by Django 5.1.7 on 2025-05-18 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ice', '0003_icecream_created_at_icecream_image_url_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='vendorprofile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vendor_name', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('nin', models.IntegerField()),
                ('password', models.CharField(max_length=40)),
                ('image', models.CharField(max_length=50)),
                ('image_url', models.URLField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
