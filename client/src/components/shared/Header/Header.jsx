import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout, currentPath } = props;

  const color = currentUser ? "header-login" : "header"
        
  return (
    <div className={color}>
      {/* <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1> */}
      {
        currentUser ?
          <div className="user-buttons">
            <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #F4F2E9" }}>Babel's Shelf</Link></h1>
            <button id="logout-button" onClick={handleLogout}>Logout</button>
            <Link to="/dashboard"><button id="return-button">Return to Dashboard</button></Link>
          </div>
          :

          currentPath === "" ?
            
            <div className="home-login-register">
              <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>
              <Link to="/login"><button id="login">Login</button></Link>
              <Link to="/register"><button id="register">Register</button></Link>
          </div>
            :

            currentPath === "login" ?
              <>
                      <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>

              <Link to="/register"><button id="register">Register</button></Link>
            </>
            :
            currentPath === "register" ?
                <>
                        <h1 id="logo"><Link to="/" style={{ textDecoration: 'none', color:" #53352d" }}>Babel's Shelf</Link></h1>

            <Link to="/login"><button id="login">Login</button></Link>
            </>
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
