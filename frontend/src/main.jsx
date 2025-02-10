import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css'; // Check if your styles are being applied correctly
import App from './App';  // Ensure App component is correctly imported
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Only here should we use BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
