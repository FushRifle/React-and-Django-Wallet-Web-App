# React-and-Django-Wallet-Web-App
#Created by Abdullahi Olawale Mukaila
# Deji Wallet Web Application

Deji Wallet is a web application built with **Django** for the backend and **React** for the frontend. The app provides functionalities such as viewing linked accounts/cards, checking account balances, income/expenditure analysis, QR code-based transactions (send/receive money), and spending activity logs.

## Features

- **View Linked Accounts/Cards:** See all linked accounts and cards.
- **View Account Balance:** Monitor the current balance in your account.
- **Income/Expenditure Analysis:** Track your income and expenditure.
- **Receive Money with QR Scan:** Scan QR code to receive payments.
- **Send Money with QR Scan:** Use QR code to send payments.
- **Spending Activity Log:** View all past spending activities.

## Requirements

Before running the application, make sure you have the following installed:

- **Python 3.x**
- **Django 3.x**
- **Node.js** (for the React frontend)
- **npm** or **yarn**

### Backend Setup (Django)

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/deji-wallet.git
   cd deji-wallet/backend
   
2.Set up a virtual environment (optional but recommended):
  python -m venv venv
  source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
  
3. Install the required dependencies:
   pip install -r requirements.txt
   
5. Run migrations to set up the database:
   python manage.py migrate

###  Frontend Setup (React)

1.  Navigate to the frontend folder:
bash
cd ../frontend

2.  Install the required dependencies:
bash
npm install

3.  Start the React development server:
bash
npm start

###  The frontend will run at http://localhost:3000/.

###  API Endpoints

Authentication:
POST /api/login/: Login endpoint to authenticate users.
POST /api/signup/: Register a new user.
Wallet & Transactions
GET /api/accounts/: View linked accounts/cards.
GET /api/balance/: View current account balance.
GET /api/transactions/: View transaction history.
POST /api/send-money/: Send money via QR scan.
POST /api/receive-money/: Receive money via QR scan.
