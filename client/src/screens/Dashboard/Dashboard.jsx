import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = (props) => {
  const { currentUser } = props;

  return (
    <div className="dashboard-container">
      <div className="user-greeting-box">
        <h2 id="dashboard-welcome">Welcome { currentUser.username}!</h2>
      </div>
      <div className="routes-body">
        <Link id="bookshelf-link" to='/bookshelf' style={{ textDecoration: 'none', color:" #000000" }}>Search BookShelf</Link>
        <Link id="myshelf-link" to='/myShelf' style={{ textDecoration: 'none', color:" #000000" }}>My Shelf</Link>
        <Link id="addbooks-link" to='/addBooks' style={{ textDecoration: 'none', color:" #000000" }}>Add Books</Link>
      </div>
    </div>

  )
}

export default Dashboard;