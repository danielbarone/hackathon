from django.db import models

class Facility(models.Model):
    class Meta:
        verbose_name_plural = 'Facilities'

    name = models.CharField(max_length=120)
    number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.name