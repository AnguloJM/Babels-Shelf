import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { renderAllBooks, destroyBook, renderOneBook } from '../../services/books';
import './BookShelf.css'

const BookShelf = (props) => {

  // const history = useHistory();

  // const [books, setBooks] = useState({
  //   img_url: '',
  //   title: '',
  //   author: '',
  //   genre: ''
  // })
  const [allBooks, setAllBooks] = useState([])
  const [isDeleted, setDeleted] = useState(false);
  // let { id } = useParams();
  // const { currentUser } = props;

  useEffect(() => {
    const getAllBooks = async () => {
      const bookData = await renderAllBooks();
      setAllBooks(bookData)
    }
    getAllBooks();
  }, [isDeleted])

  // useEffect(() => {
  //   const fetchBook = async () => {
  //     const book = await renderOneBook(id);
  //     setBooks(book);
  //   }
  //   fetchBook();
  // }, [id]);

  const handleClick = async (id) => {
    // let { id } = props.match.params;
    await destroyBook(id);
    setDeleted(!isDeleted);
    // history.push('/bookshelf')
  }

  // if (isDeleted) {
  //   return <Redirect to={`/bookshelf`}/>
  // }

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
             <button>Add to My shelf</button>
             <button
               id="card-delete-button"
               onClick={() => handleClick(book.id)}>
               <Link className="delete-link" to={`/bookshelf/`}>Delete</Link>
             </button>
          </div>
          ))
      }
      </div>
      </>
  )
}

export default BookShelf;