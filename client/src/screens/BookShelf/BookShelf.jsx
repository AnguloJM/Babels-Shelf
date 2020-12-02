import React, { useEffect, useState } from 'react';
import { renderAllBooks } from '../../services/books';
import './BookShelf.css'

const BookShelf = (props) => {

  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    const getAllBooks = async () => {
      const bookData = await renderAllBooks();
      setAllBooks(bookData)
      console.log(bookData)
    }
    getAllBooks();
  }, [])

  return (
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
          </div>
          ))
      }
    </div>
  )
}

export default BookShelf;