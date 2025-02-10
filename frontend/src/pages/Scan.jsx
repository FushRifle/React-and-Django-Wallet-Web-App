import React, { useState } from "react";
import "../css/scan.css";
import { Button } from "react-bootstrap";
import { QrReader } from "react-qr-reader";

const ScanQRCode = () => {
  const [scanMessage, setScanMessage] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScanMessage(data.text); // You can set your scan data here
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="container text-center mt-4">
      <h2>Scan QR Code</h2>
      <div className="qr-container">
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%", height:"auto"}} />
      </div>
      {scanMessage && <h5 className="mt-3">Scanned Data: {scanMessage}</h5>}
      <Button className="mt-3">Send Money</Button>
    </div>
  );
};

export default ScanQRCode;
