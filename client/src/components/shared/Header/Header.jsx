import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div>
          <h1><Link id="logo" to="/">Babel's Shelf</Link></h1>
        <Link to="/login"><button id="login">Login</button></Link>
        <Link to="/register"><button id="register">Register</button></Link>
      </div>
    </header>
  )
}

export default Header;
