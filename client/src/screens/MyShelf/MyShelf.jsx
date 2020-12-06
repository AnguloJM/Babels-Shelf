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

  const Favorite = function (favId, bookId) {
    this.favId = favId
    this.bookId = bookId
  }

  const FavoriteBook = function (favId, book) {
    this.favId = favId
    this.book = book
  }

  useEffect(() => {
    const getAllFavorites = async () => {
      const favoritesData = await renderAllFavorites();
      console.log(favoritesData)
      if (currentUser) {
        const favsInfo = favoritesData.map((favs) => {
          if (currentUser.id === favs.user_id) {
            return new Favorite(favs.id, favs.book_id)
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
      const favBookList = []

      bookData.forEach((book) => {
        userFavorites.forEach((fav) => {
          if (book.id == fav.bookId) {
            return favBookList.push(new FavoriteBook(fav.favId, book))
          }
        })
      })
      setFavBooks([...favBookList])
    }
    getAllBooks();
  }, [userFavorites])

  const handleClick = async (favId) => {
    await destroyFavorite(favId)
    // setFavBooks(prevState => prevState.filter(favBooks => favBooks.id !== favId))
  }

  console.log(userFavorites)
  console.log(favBooks)
  return (
    <div>
      <h2>My Shelf</h2>
      {
        favBooks.map(favBook => (
          <div className="content-wrap" key={favBook.book.id} > 
            <img
              className="myshelf-img"
              src={favBook.book.img_url}
              alt="book cover"
            />
            <p>{favBook.book.title}</p>
            <Link className="edit-link" to={`/editbook/${favBook.book.id}/`}><button id="card-edit-button">Edit</button></Link>
            <button
              id="myshelf-delete-button"
              onClick={() => handleClick(favBook.favId)}
            ><Link className="myshelf-delete-Link" to={`/myShelf`}>Remove</Link>
            </button>
          </div>
         ))
      }
    </div>
  )
}

export default MyShelf;