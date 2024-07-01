import React, { useState } from 'react';
import './HamburgerMenu.css'; // Import the CSS file for styling

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ position: "sticky", top: "0px", zIndex: 999 }}>
      <div className={`menuContainer section1 ${isOpen ? 'open' : ''}`}>
        <div onClick={toggleMenu} className={`bar ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default HamburgerMenu