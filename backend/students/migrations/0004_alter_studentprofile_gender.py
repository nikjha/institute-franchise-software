# Generated by Django 4.2.6 on 2023-11-22 16:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("students", "0003_alter_studentprofile_profile_picture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="studentprofile",
            name="gender",
            field=models.CharField(
                choices=[
                    ("S", "Select"),
                    ("M", "Male"),
                    ("F", "Female"),
                    ("O", "Other"),
                ],
                default="S",
                max_length=1,
            ),
        ),
    ]
