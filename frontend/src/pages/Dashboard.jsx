import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/dashboard.css";
import { FaEye, FaBell, FaEyeSlash, FaCar, FaHome, FaMusic, FaGamepad } from 'react-icons/fa';
import { FiPlus, FiTrendingUp } from 'react-icons/fi';
import { BsWallet2 } from 'react-icons/bs';
import { RiNetflixFill } from 'react-icons/ri';
import { FaAmazon, FaCcMastercard } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = 12345.67; // Example balance

  const [showDropdown, setShowDropdown] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [notifications, setNotifications] = useState([]); // Store all notifications
  const [latestNotification, setLatestNotification] = useState(""); // Temporary popup message
  const [isVisible, setIsVisible] = useState(false); // Control popup

  useEffect(() => {
    // API call to Django backend
    axios
      .get("http://127.0.0.1:8000/api/dashboard/")
      .then((response) => {
        const newMessage = response.data.message;
        setLatestNotification(newMessage);
        setIsVisible(true); // Show popup

        // Add notification to the list
        setNotifications((prev) => [...prev, newMessage]);

        // Hide notification after 5 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("There was an error fetching the API:", error);
      });
  }, []); // Runs only once when the component mounts


  return (

    <div className="dashboard-container">

      {messageVisible && message && (
        <div className="message">
          <h2>{message}</h2>
        </div>
      )}
      
      <div className="header">
        <div className="balance-info">
          <p>Total Balance</p>
          <div className="balance-display">
          <span>{showBalance ? `$${balance.toFixed(2)}` : '*******'}</span>
          <button onClick={() => setShowBalance(!showBalance)} className="eye-button">
            {showBalance ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        </div>
        
        {/* Notification Bell Icon */}
        <div className="notification-container">
          <button onClick={() => setShowDropdown(!showDropdown)} className="notification-btn">
            <FaBell />
          </button>

          {/* Live Notification Popup (Auto Hides) */}
          {isVisible && <div className="live-notification">{latestNotification}</div>}

          {/* Notification Dropdown (Click to View History) */}
          {showDropdown && (
            <div className="notification-dropdown">
              {notifications.length > 0 ? (
                notifications.map((note, index) => <p key={index}>{note}</p>)
              ) : (
                <p>No new notifications</p>
              )}
            </div>
          )}
        </div>

      </div>
      
        <div className="card-content">
          <div className="card-text">
            <p>XXXX XXXXX XXXXX XXXXX</p>
            <p>Deji Wallet</p>
            <FaCcMastercard alt="Mastercard Logo" className="card-logo"/>
          </div>
        </div>
      <br />

      <div className="actions">
        <button className="action-btn"><FiPlus /> Add money</button>
        <button className="action-btn"><FiTrendingUp /> Transfer</button>
        <button className="action-btn"><BsWallet2 /> Budget</button>
      </div>
      
      <div className="recent-activities">
        <div className="box-header d-flex justify-content-between align-items-center">
        <h3>Recent Activities</h3>    
        <span className="view-all">View All</span>
        </div>
        
        <div className="activity">
          <RiNetflixFill className="activity-icon" />
          <div className="activity-details">
            <p>Netflix Subscription</p>
            <span>05:28PM • Payment Received</span>
          </div>
          <span className="expense">-USD 10.99</span>
        </div>

        <div className="activity">
          <FaAmazon className="activity-icon" />
          <div className="activity-details">
            <p>Amazon Subscription</p>
            <span>08:28PM • Payment Received</span>
          </div>
          <span className="expense">-USD 10.99</span>
        </div>
        
        <div className="activity">
          <SiCanva className="activity-icon" />
          <div className="activity-details">
            <p>Canva Subscription</p>
            <span>11:30AM • Payment Received</span>
          </div>
          <span className="expense">-USD 10.99</span>
        </div>

          <br />
        {/* Savings Plans */}
    <div className="savings-plans">
      <div className="box-header d-flex justify-content-between align-items-center">
      <h3>My Savings Plans</h3>
      <span className="view-all">View All</span>
      </div>

      <div className="plans d-flex justify-content-between">
        <div className="plan-item">
          <FaCar className="plan-icon" />
            <p>New Car</p>
        </div>

        <div className="plan-item">
          <FaHome className="plan-icon" />
          <p>New House</p>
        </div>

        <div className="plan-item">
          <FaGamepad className="plan-icon" />
          <p>Games</p>
        </div>

        <div className="plan-item">
          <FaMusic className="plan-icon" />
          <p>Entertainment</p>
        </div>

      </div>

      </div>
      </div>
      <br />
    </div>
  );
};

export default Dashboard;