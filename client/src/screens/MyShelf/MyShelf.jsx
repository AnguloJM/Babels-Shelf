import React, { useEffect, useState } from 'react';
import { renderAllFavorites } from '../../services/favorites';
import { renderAllBooks } from '../../services/books';
import './MyShelf.css'

const MyShelf = (props) => {

  const [userFavorites, setFavorites] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const getAllFavorites = async () => {
      const favoritesData = await renderAllFavorites();
      const favsInfo = favoritesData.map((favs) => {
        if (currentUser.id === favs.user_id) {
          return favs.book_id
        }
      })
      setFavorites(favsInfo)
    }
    getAllFavorites();
  }, [])

  const [favBooks, setFavBooks] = useState([])

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
  return (
    <div>
      {
        favBooks.map(book => (
          <div className="content-wrap" key={book.id} > 
            <img
              className="bookshelf-img"
              src={book.img_url}
              alt="book cover"
            />
            <p>{book.title}</p>
         </div>
         ))
      }
    </div>
  )
}

export default MyShelf;