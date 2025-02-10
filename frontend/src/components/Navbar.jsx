import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaChartBar, FaWallet, FaUserAlt, FaQrcode } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
  <nav className="navbar">
    <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
    <FaHome />
    </Link>

    <Link to="/statistics" className={`nav-item ${location.pathname === '/statistics' ? 'active' : ''}`}>
    <FaChartBar />
    </Link>

    <Link to="/mycards" className={`nav-item ${location.pathname === '/mycards' ? 'active' : ''}`}>
    <FaWallet />
    </Link>

    <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
    <FaUserAlt />
    </Link>

    <Link to="/scan" className={`nav-item ${location.pathname === '/scan' ? 'active' : ''} scan-icon`}>
    <FaQrcode />
    </Link>
</nav>
  );
};

export default Navbar;
