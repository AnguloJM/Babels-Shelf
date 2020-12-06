import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout, currentPath } = props;

  const color = currentUser ? "header-login" && "logo-lgin" : "header" && "logo-login"
        
  return (
    <div className={color}>
      {
        currentUser ?
          <div className ="header-login">
            <h1 id="logo-login"><Link to="/" style={{ textDecoration: 'none', color: " #F4F2E9" }}>Babel's Shelf</Link></h1>
            <div className="user-buttons">
              <Link to="/dashboard"><button id="return-button">Return to Dashboard</button></Link>
              <button id="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          </div>
          :

          currentPath === "" ?
            <div className="header">
              <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>
              <div className="home-login-register">
                <Link to="/login"><button id="login-button">Login</button></Link>
                <Link to="/register"><button id="register-button">Register</button></Link>
              </div>
            </div>
            :

            currentPath === "login" ?
              <div className="header">
                <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>
                <Link to="/register"><button id="solo-register-button">Register</button></Link>
              </div>
            :
            currentPath === "register" ?
              <div className ="header">
                <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>
                <Link to="/login"><button id="solo-login-button">Login</button></Link>
              </div>
            :
              <>
              </>
      }
  
      {
        currentUser &&
        <>
          {/* <Link to="/dashboard"><button id="return-button">Return to Dashboard</button></Link> */}
        </>
      }
    </div>
  )
}

export default Header;
