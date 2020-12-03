import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = (props) => {
  const { currentUser } = props;

  return (
    <div>
      <div className="user-greeting-box">
        <h2>Welcome { currentUser.username}</h2>
      </div>
      <div className="routes-body">
        <Link id="bookshelf-link" to='/bookshelf'>Search BookShelf</Link>
        <Link id="myshelf-link" to='/myShelf'>My Shelf</Link>
        <Link id="addbooks-link" to='/addBooks'>Add Books</Link>
      </div>
    </div>

  )
}

export default Dashboard;