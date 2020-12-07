import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { destroyFavorite, renderAllFavorites } from '../../services/favorites';
import { renderAllBooks } from '../../services/books';
import './MyShelf.css'

const MyShelf = (props) => {

  const [favorites, setFavorites] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const getAllFavorites = async () => {
      const favoritesData = await renderAllFavorites();
        setFavorites(favoritesData)
    }
    getAllFavorites();
  }, [currentUser])

  const handleClick = async (favId) => {
    await destroyFavorite(favId)
    setFavorites(prevState => prevState.filter(favBooks => favBooks.id !== favId))
  }

  return (
    <>
      <div className="myshelf-title">
        <h2 id="myshelf-message">My Shelf</h2>
      </div>
      <div className="myshelf-container">
      {
        favorites.map(favBook => (
          <div className="content-wrap" key={favBook.book.id} > 
            <img
              className="myshelf-img"
              src={favBook.book.img_url}
              alt="book cover"
            />
            <p>{favBook.book.title}</p>
            <button
              id="myshelf-delete-button"
              onClick={() => handleClick(favBook.id)}
            ><Link className="myshelf-delete-Link" to={`/myShelf`} style={{ textDecoration: 'none', color: " #F4F2E9" }}>Remove</Link>
            </button>
          </div>
         ))
      }
      </div>
    </>
  )
}

export default MyShelf;