import React from 'react';

const ReceiveMoney = () => {
  // Dummy QR code link (can replace with real QR code generator)
  const qrCodeLink = "https://api.qrserver.com/v1/create-qr-code/?data=your-wallet-address-here&size=200x200";

  return (
    <div className="receive-money-page">
      <h1>Receive Money</h1>
      <div>
        <h2>Scan this QR code to receive money</h2>
        <img src={qrCodeLink} alt="QR Code" />
      </div>
    </div>
  );
};

export default ReceiveMoney;
