import React, { useState } from 'react';
import './styles.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(''); // Track active button

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveButton(isDropdownOpen ? '' : 'Electronic Equipment');
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src="himatekkom-logo.png" alt="HIMATEKKOM Logo" />
            <span>HIMATEKKOM Consignment</span>
          </div>
          <nav>
            <div className="nav-container">
              <ul className="nav-links">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Find</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <a href="#" className="sell-button">
              <span className="icon">+</span> Sell Product
            </a>                
          </nav>
        </div>
      </header>

      <div className="category-buttons">
        {/* Dropdown untuk Electronic Equipment */}
        <div className="dropdown">
          <button 
            onClick={toggleDropdown}
            className={`category-button dropdown-button ${activeButton === 'Electronic Equipment' ? 'active' : ''}`}
          >
            <span>Electronic Equipment</span>
            <div className="dropdown-icon"></div>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Electronic Equipment</a></li>
              <li><a href="#">Laboratory Equipment</a></li>
              <li><a href="#">Food and Beverages</a></li>
              <li><a href="#">Other</a></li>
            </ul>
          )}
        </div>
        
        {/* Button Saved Product */}
        <button 
          onClick={() => handleButtonClick('Saved Product')} 
          className={`category-button ${activeButton === 'Saved Product' ? 'active' : ''}`}
        >
          Saved Product
        </button>
      </div>

      <div className="product-list">
        <div className="product-item">
          <div className="bookmark"></div>
          <img src="image 1.png" alt="Arduino" />
          <h3>Arduino</h3>
          <h3>Rp120.000,00</h3>
        </div>
        <div className="product-item">
          <div className="bookmark"></div>
          <img src="image 2.png" alt="Raspberry Pi 4 Model B" />
          <h3>Raspberry Pi 4 Model B (2GB RAM)</h3>
          <h3>Rp800.000,00</h3>
        </div>
        <div className="product-item">
          <div className="bookmark"></div>
          <img src="image 3.png" alt="ESP8266 NodeMCU" />
          <h3>ESP8266 NodeMCU</h3>
          <h3>Rp120.000,00</h3>
        </div>
        <div className="product-item">
          <div className="bookmark"></div>
          <img src="image 4.png" alt="STM32F103C8T6" />
          <h3>STM32F103C8T6 ("Blue Pill")</h3>
          <h3>Rp120.000,00</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
