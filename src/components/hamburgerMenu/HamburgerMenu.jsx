import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default HamburgerMenu