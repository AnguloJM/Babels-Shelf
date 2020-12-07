import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { renderAllBooks, destroyBook } from '../../services/books';
import { createFavorite } from '../../services/favorites';
import './BookShelf.css'

const BookShelf = (props) => {
  const [allBooks, setAllBooks] = useState([])
  const { currentUser } = props;

  useEffect(() => {
    const getAllBooks = async () => {
      const bookData = await renderAllBooks();
      setAllBooks(bookData)
    }
    getAllBooks();
  }, [])

  const toggleMyShelf = async (bookId) => {
    await createFavorite({'user_id': currentUser.id, 'book_id': bookId})
   }
  
  return (
    <>
      <div className="bookshelf-title">
        <h2 id="babels-shelf-title">Babel's Shelf</h2>
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
             <button class="add-to-shelf-button" type="button" onClick={() => toggleMyShelf(book.id)}>Add to My Shelf</button>
             <Link className="edit-link" to={`/editbook/${book.id}/`}><button id="card-edit-button">Edit</button></Link>
          </div>
          ))
      }
      </div>
      </>
  )
}

export default BookShelf;