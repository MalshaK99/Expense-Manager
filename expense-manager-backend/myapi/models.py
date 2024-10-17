from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import AbstractUser


class Member(AbstractUser):
    email = models.CharField(max_length=130, primary_key=True)
    first_name = models.CharField(max_length=130)
    last_name = models.CharField(max_length=130)
    password = models.CharField(max_length=130)
    username = None
    id = None
    # is_anonymous = None
    # is_authenticated = True
    # last_login = True
    # is_superuser = None
    # username = None
    # is_staff = None
    # is_active = None
    # date_joined = True

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [first_name, last_name, email, password]

    class Meta:
        db_table = "myapi_member"


class Categories(models.Model):
    
    Name = models.CharField(max_length=250,primary_key=True)
    type = models.CharField(max_length=50)

    def _str_(self):
        return self.cet

class Income(models.Model):
    Iid = models.AutoField(primary_key=True)
    User_email = models.ForeignKey(Member, on_delete=models.CASCADE, null=True, default=None)
    IAmount = models.IntegerField()
    INote = models.CharField(max_length=500)
    IDate = models.DateField(max_length=350)
    Category_name = models.CharField(max_length=250)

    def _str_(self):
        return self.Iid
    
class Expense(models.Model):
    Eid = models.AutoField(primary_key=True)
    User_email = models.ForeignKey(Member, on_delete=models.CASCADE, null=True, default=None)
    EAmount = models.IntegerField()
    ENote = models.CharField(max_length=500)
    EDate = models.DateField(max_length=350)
    Category_name = models.CharField(max_length=250)


    def _str_(self):
        return self.Eid

