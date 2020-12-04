import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { createBook } from '../../services/books';
import { Modal, Button } from 'react-bootstrap';
import './AddBooks.css';

const AddBooks = () => {
  const [book, setBook] = useState({
    img_url: '',
    author: '',
    title: '',
    genre: ''
  });

  const [allBooks, setAllBooks] = useState([])
  const [isCreated, setCreated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createBook(book);
    setCreated({ created });
  }

  if (isCreated) {
    return <Redirect to={`/bookshelf`}/>
  }

  return (
    <div>
      <div id="addbooks-title">
        <h1>Add More Books!</h1>
      </div>
      <div className="book-create">
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="create-inputs">
            <div className="create-img-box">
            <label htmlFor="img_url">Image Link</label>
            <input
              className="create-input-img"
              type="text"
              value={book.img_url}
              name="img_url"
              autoFocus
              onChange={handleChange}
            />
          </div>
            <div className="create-title-box">
            <label htmlFor="title">Title</label>
            <input
              className="create-input-title"
              type="text"
              value={book.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />  
          </div>
            <div className="create-author-box">
            <label htmlFor="author">Author</label>
            <input
              className="create-input-author"
              type="text"
              value={book.author}
              name='author'
              required
              autoFocus
              onChange={handleChange}
            />  
            </div>
            <div className="create-genre-box">
            <label htmlFor="genre">Genre</label>
            <input
              className="create-input-genre"
              type="text"
              value={book.genre}
              name='genre'
              required
              autoFocus
              onChange={handleChange}
            />  
          </div>
          </div>
          <button type='submit' id="create-save-button">Add Book</button>
          
      </form>
    </div>
    </div>
  )
}

export default AddBooks;