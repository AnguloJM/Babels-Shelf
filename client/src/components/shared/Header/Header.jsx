import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div>
          <h1><Link id="logo" to="/">Babel's Shelf</Link></h1>
        <button id="login">Login</button>
        <button id="register">Register</button>
      </div>
    </header>
  )
}

export default Header;
