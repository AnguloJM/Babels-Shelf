import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { renderAllBooks } from '../../services/books';
import './BookShelf.css'

const BookShelf = (props) => {

  const [allBooks, setAllBooks] = useState([])
  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();
  // const { currentUser } = props;

  useEffect(() => {
    const getAllBooks = async () => {
      const bookData = await renderAllBooks();
      setAllBooks(bookData)
    }
    getAllBooks();
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const deleted = await destroyBook(id, lesson);
    setDeleted(deleted);
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
             <Link className="delete-link" to={`/bookshelf/`}>
               <button id="card-delete-button">Delete</button>
             </Link>
          </div>
          ))
      }
      </div>
      </>
  )
}

export default BookShelf;