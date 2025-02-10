import React from 'react';

const Accounts = () => {
  // Dummy data for linked accounts
  const accounts = [
    { id: 1, name: 'Mastercard', balance: '$5000' },
    { id: 2, name: 'Visa', balance: '$3200' },
    { id: 3, name: 'PayPal', balance: '$1200' },
  ];

  return (
    <div className="accounts-page">
      <h1>Linked Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            <h2>{account.name}</h2>
            <p>Balance: {account.balance}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
