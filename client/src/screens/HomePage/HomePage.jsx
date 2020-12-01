import React from 'react';
import Layout from '../../components/shared/Layout/Layout'
import './HomePage.css'

const HomePage = () => {
  
  return (
    <Layout>
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
    </Layout>
  )
}

export default HomePage;