# Generated by Django 4.1 on 2022-10-07 17:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0002_blog_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='author',
        ),
    ]