import React from 'react';
import './HomePage.css'

const HomePage = (props) => {

  props.setCurrentPath("")
  
  return (
      <div className="homepage">
        <div className="top-box">
          <img
            id="homescreen-img"
            src="/assets/babels library.jpg"
            alt="bookshelf drawing"
          />
        </div>
        <div className="welcome-message">
          <h1 id="welcome">Welcome</h1>
        <p className="homepage-para">Babel'Shelf is your never ending library. Search through a vierty of books and begin creating your own personalized library. Can't find
           the book you your looking for? You have the option to add and share your book within our community!</p>
        </div>
      </div>
  )
}

export default HomePage;