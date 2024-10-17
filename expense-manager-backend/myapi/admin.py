from django.contrib import admin
from .models import Member,Categories, Income, Expense

class MemberAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name']

class CategoriesAdmin(admin.ModelAdmin):
    list_display = ['Name', 'type']

class IncomeAdmin(admin.ModelAdmin):
    list_display = ['Iid', 'User_email', 'IAmount', 'INote', 'IDate', 'Category_name']

class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['Eid', 'User_email', 'EAmount', 'ENote', 'EDate', 'Category_name']

admin.site.register(Member,MemberAdmin)
admin.site.register(Categories,CategoriesAdmin)
admin.site.register(Income,IncomeAdmin)
admin.site.register(Expense,ExpenseAdmin)