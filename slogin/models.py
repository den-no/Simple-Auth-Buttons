from django.db import models

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    # Add extra fields if needed 
    bio = models.TextField(blank=True)

