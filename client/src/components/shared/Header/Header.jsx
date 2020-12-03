import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout, currentPath } = props;

  const color = currentUser ? "header-login" : "header"
        
  return (
    <div className={color}>
      <h1><Link id="logo" to="/">Babel's Shelf</Link></h1>
      {
        currentUser ?
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
          :

          currentPath === "" ?
          <>
              <Link to="/login"><button id="login">Login</button></Link>
              <Link to="/register"><button id="register">Register</button></Link>
          </>
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
