import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout, currentPath } = props;

  const color = currentUser ? "header-login" : "header"
        
  return (
    <div className={color}>
      <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>
      {
        currentUser ?
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
          :

          currentPath === "" ?
          <div className="home-login-register">
              <Link to="/login"><button id="login">Login</button></Link>
              <Link to="/register"><button id="register">Register</button></Link>
          </div>
            :

            currentPath === "login" ?
            <>
              <Link to="/register"><button id="register">Register</button></Link>
            </>
            :
            currentPath === "register" ?
            <>
            <Link to="/login"><button id="login">Login</button></Link>
            </>
            :
            <>
            </>
      }
  
      {
        currentUser &&
        <>
          <Link to="/dashboard"><button id="return-button">Return to Dashboard</button></Link>
        </>
      }
    </div>
  )
}

export default Header;
