import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { destroyFavorite, renderAllFavorites } from '../../services/favorites';
import { renderAllBooks } from '../../services/books';
import './MyShelf.css'

const MyShelf = (props) => {

  const [userFavorites, setFavorites] = useState([])
  const [isDeleted, setDeleted] = useState(false)
  const [favBooks, setFavBooks] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const getAllFavorites = async () => {
      const favoritesData = await renderAllFavorites();
      if (currentUser) {
        const favsInfo = favoritesData.map((favs) => {
          if (currentUser.id === favs.user_id) {
            return favs.book_id
          }
        })
        setFavorites(favsInfo)
      }
    }
    getAllFavorites();
  }, [currentUser])

  useEffect(() => {
    const getAllBooks = async () => {
      const bookData = await renderAllBooks();
      bookData.map((book) => {
        userFavorites.map((fav) => {
          if (book.id == fav) {
            return favBooks.push(book)
          }
        })
      })
      const favoriteReads = [...favBooks]
      setFavBooks(favoriteReads)
    }
    getAllBooks();
  }, [userFavorites])

  const handleClick = async (id) => {
    await destroyFavorite(id)
    setDeleted(!isDeleted);
  }

  return (
    <div>
      <h2>My Shelf</h2>
      {
        favBooks.map(book => (
          <div className="content-wrap" key={book.id} > 
            <img
              className="myshelf-img"
              src={book.img_url}
              alt="book cover"
            />
            <p>{book.title}</p>
            <Link className="edit-link" to={`/editbook/${book.id}/`}><button id="card-edit-button">Edit</button></Link>
            <button
              id="myshelf-delete-button"
              onClick={() => handleClick(book.id)}
            ><Link className="myshelf-delete-Link" to={`/myShelf`}>Remove</Link>
            </button>
          </div>
         ))
      }
    </div>
  )
}

export default MyShelf;