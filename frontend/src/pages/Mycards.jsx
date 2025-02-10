import React from "react";
import "../css/cards.css";
import { Plus } from "react-feather";
import { FaCcMastercard } from 'react-icons/fa';


const MyCards = () => {

  return (
    <div className="container mt-4">
      <h2>My Cards</h2>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary">
          <Plus />
        </button>
      </div>

    <br />
    <br />
              <div className="card-content">
                <div className="card-text">
                  <p>XXXX XXXXX XXXXX XXXXX</p>
                  <p>Abdullahi Olawale Fush</p>
                  <FaCcMastercard alt="Mastercard Logo" className="card-logo"/>
                </div>
              </div>

      <br />
      <br />
              <div className="card-content">
                <div className="card-text">
                  <p>XXXX XXXXX XXXXX XXXXX</p>
                  <p>Deji Wallet</p>
                  <FaCcMastercard alt="Mastercard Logo" className="card-logo"/>
                </div>
            </div>
      <br />
      <br />

    </div>
  );
};

export default MyCards;
