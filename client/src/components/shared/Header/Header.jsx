import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <div className="header">
      <h1><Link id="logo" to="/">Babel's Shelf</Link></h1>
      {
        currentUser ?
          <>
            <h2>Weclome {currentUser.username}</h2>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <>
            <Link to="/login"><button id="login">Login</button></Link>
            <Link to="/register"><button id="register">Register</button></Link>
          </>
      }
      {/* <hr />
      {
        currentUser &&
        <>
          <Link to="/dashboard">dashboard</Link>
        </>
      } */}
    </div>
  )
}

export default Header;
