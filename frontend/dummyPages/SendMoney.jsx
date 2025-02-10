import React, { useState } from 'react';

const SendMoney = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sent $${amount} to ${recipient}`);
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="send-money-page">
      <h1>Send Money</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipient:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient name"
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMoney;
