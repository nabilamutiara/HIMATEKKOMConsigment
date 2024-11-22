// src/BoxContainer.js
import React from 'react';
import './Navbar.css';


const BoxContainer = () => {
  return (
    
    <div className="outer-box">
      <div className="logo">
      <img src="/img/logohimatekkom.png" alt="logo" />
      </div>
      <div className="merek">
        HIMATEKKOM Consignment
      </div>
      <div className="navbar">
        <div className="home">
            Home
        </div>
        <div className="find">
            Find
        </div>
        <div className="about">
            About
        </div>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search..." class="search-input"></input>
        <button class="search-button">Search</button>
      </div>
      <div className="sellproductorservice">
        <span class="material-symbols-outlined custom-icon">add_circle</span>
        Sell Product or Service
      </div>
      <div class="profile-picture">
        <img src={`${process.env.PUBLIC_URL}/img/profilepicture.png`} alt="Profile Picture"></img>
      </div>
    </div>
  );
};

export default BoxContainer;
