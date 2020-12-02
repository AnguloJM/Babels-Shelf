import React from 'react';
import './HomePage.css'

const HomePage = () => {
  
  return (
      <div className="homepage">
        <div className="top-box">
          <img
            id="bookshelf-img"
            src="/assets/babels library.jpg"
            alt="bookshelf drawing"
          />
        </div>
        <div className="welcome-message">
          <h1>Welcome</h1>
          <p></p>
        </div>
      </div>
  )
}

export default HomePage;