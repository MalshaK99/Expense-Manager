from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view,permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .serializers import ChangePasswordSerializer, MemberSerializer,CategoriesSerializer,IncomeSerializer,ExpenseSerializer, UserUpdateSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Member,Categories,Income,Expense
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.hashers import check_password
from .serializers import MemberSerializer, UserUpdateSerializer, ChangePasswordSerializer



def success_response(data=None):
    return Response(data, status=status.HTTP_200_OK)

def error_response(errors, status_code=status.HTTP_400_BAD_REQUEST):
    return Response(errors, status=status_code)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    member = request.user  # Use 'request.user' to access the authenticated user
    serializer = MemberSerializer(instance=member)
    return success_response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user_details(request):
    user = request.user
    serializer = UserUpdateSerializer(user, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return success_response(serializer.data)
    else:
        return error_response(serializer.errors)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    serializer = ChangePasswordSerializer(data=request.data)

    if serializer.is_valid():
        current_password = serializer.validated_data['current_password']
        new_password = serializer.validated_data['new_password']

        if check_password(current_password, user.password):
            user.set_password(new_password)
            user.save()
            update_session_auth_hash(request, user)  # Keep the user logged in
            return success_response({'message': 'Password changed successfully.'})
        else:
            return error_response({'error': 'Current password is incorrect.'})
    else:
        return error_response(serializer.errors)
    
    
@api_view(['POST'])
def validate_signup(request):

    try:
        data = request.data
        memberSerializer = MemberSerializer(data=data)
        memberSerializer.is_valid(raise_exception=True)
        memberSerializer.save()

        return Response(
            status=status.HTTP_201_CREATED
        )
    except Exception as e:
        print(e)
        return Response(
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


class ProfileView(APIView):
    def get(self, request):
        content = {"message": "Hello from JWT"}

        return Response(content)
    
class MemberView(viewsets.ModelViewSet):
    serializer_class = MemberSerializer
    queryset = Member.objects.all()

class CategoriesView(viewsets.ModelViewSet):
    serializer_class = CategoriesSerializer
    queryset = Categories.objects.all()

class IncomeView(viewsets.ModelViewSet):
    serializer_class = IncomeSerializer
    queryset = Income.objects.all()

class ExpenseView(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()