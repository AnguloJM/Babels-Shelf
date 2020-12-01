import React from 'react';
import Layout from '../../components/shared/Layout/Layout'

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
      </div>
    </Layout>
  )
}

export default HomePage;