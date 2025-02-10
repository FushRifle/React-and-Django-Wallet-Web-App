import React from 'react';

const Transactions = () => {
  // You can dynamically load transactions here, for now, we'll use dummy data
  const transactions = [
    { id: 1, date: '2025-02-08', amount: '$100', type: 'Income' },
    { id: 2, date: '2025-02-07', amount: '$50', type: 'Expense' },
    { id: 3, date: '2025-02-06', amount: '$200', type: 'Income' },
  ];

  return (
    <div className="transactions-page">
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
