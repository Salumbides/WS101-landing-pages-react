// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">Salumbides</a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Importance</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
