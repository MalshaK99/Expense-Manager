from rest_framework import serializers
from .models import Member, Categories, Income, Expense

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ["first_name", "last_name", "email", "password"]
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['Name', 'type']

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['Iid', 'User_email', 'IAmount', 'INote', 'IDate', 'Category_name']

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['Eid', 'User_email', 'EAmount', 'ENote', 'EDate', 'Category_name']

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['first_name', 'last_name', 'email']

class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField()
    new_password = serializers.CharField()
