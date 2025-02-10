from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def dashboard(request):
    return Response({"message": "Welcome to Deji Wallet"})

@api_view(['GET'])
def statistics(request):
    data = {
        "total_transactions": 100,
        "total_balance": 5000,
        "transactions_today": 5,
    }
    return Response(data)

@api_view(['GET'])
def mycards(request):
    data = [
        {"id": 1, "card_name": "Visa", "balance": 1500, "currency": "USD"},
        {"id": 2, "card_name": "MasterCard", "balance": 2000, "currency": "USD"},
    ]
    return Response(data)

@api_view(['GET'])
def profile(request):
    data = {
        "username": "john_doe",
        "email": "john.doe@example.com",
        "full_name": "John Doe",
    }
    return Response(data)

@api_view(['POST'])
def scan(request):
    # Simulating scanning a QR code or similar action
    return Response({"message": "QR Code scanned successfully!"})
