import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { renderAllBooks, destroyBook } from '../../services/books';
import { createFavorite } from '../../services/favorites';
import './BookShelf.css'

const BookShelf = (props) => {
  const [allBooks, setAllBooks] = useState([])
  const [isDeleted, setDeleted] = useState(false);
  const { currentUser } = props;

  useEffect(() => {
    const getAllBooks = async () => {
      const bookData = await renderAllBooks();
      setAllBooks(bookData)
    }
    getAllBooks();
  }, [isDeleted])

  const handleClick = async (id) => {
    await destroyBook(id);
    setDeleted(!isDeleted);
  }

  const toggleMyShelf = async (bookId) => {
    await createFavorite({'user_id': currentUser.id, 'book_id': bookId})
   }
  
  return (
    <>
      <div className="bookshelf-title">
        <h2>Babel's Shelf</h2>
      </div>
      <div className="page-container">
      {
         allBooks.map(book => (
           <div className="content-wrap" key={book.id}> 
             <img
               className="bookshelf-img"
               src={book.img_url}
               alt="book cover"
             />
             <p>{book.title}</p>
             <button type="button" onClick={() => toggleMyShelf(book.id)}>Add to My Shelf</button>
             <button
               id="bookshelf-delete-button"
               onClick={() => handleClick(book.id)}>
               <Link className="bookshelf-delete-link" to={`/bookshelf/`}>Delete</Link>
             </button>
          </div>
          ))
      }
      </div>
      </>
  )
}

export default BookShelf;