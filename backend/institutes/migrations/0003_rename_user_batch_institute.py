# Generated by Django 4.2.6 on 2023-10-31 11:30

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("institutes", "0002_alter_batch_user"),
    ]

    operations = [
        migrations.RenameField(
            model_name="batch",
            old_name="user",
            new_name="institute",
        ),
    ]
