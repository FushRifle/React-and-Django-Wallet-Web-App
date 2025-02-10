import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';  // Ensure correct paths
import Statistics from './pages/Statistics';
import Mycards from './pages/Mycards';
import Profile from './pages/Profile';
import Scan from './pages/Scan';
import Navbar from './components/Navbar'; // Ensure correct path

function App() {
  return (
    <div className="app-container">
      {/* Routes to switch between pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/mycards" element={<Mycards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>

      {/* Navbar should be always visible */}
      <Navbar />
    </div>
  );
}

export default App;
