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

  // const [allBooks, setAllBooks] = useState([])
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
    alert('Want to add another book?')
  }

  if (isCreated) {
    return <Redirect to={`/bookshelf`}/>
  }

  return (
    <div>
      <div id="addbooks-title">
        <h1 id="addmore-title">Add More Books!</h1>
      </div>
      {/* <div className="book-create"> */}
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="create-inputs">
            <input
                className="create-img-box"
                placeholder="Image URL"
              type="text"
              value={book.img_url}
              name="img_url"
              autoFocus
              onChange={handleChange}
            />
            <br />
            <input
                className="create-title-box"
                placeholder="Title"
              type="text"
              value={book.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />  
           <br />
            <input
                className="create-author-box"
                placeholder="Author"
              type="text"
              value={book.author}
              name='author'
              required
              autoFocus
              onChange={handleChange}
            />  
            <br />
            <input
                className="create-genre-box"
                placeholder="Genre"
              type="text"
              value={book.genre}
              name='genre'
              required
              autoFocus
              onChange={handleChange}
            />  
            <br />
            <button id="create-addbook-button" onClick={handleShow}>Add Book</button>
          </div>
          {/* <button id="create-save-button" onClick={handleShow}>Add Book</button> */}
          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Book has been added to your shelf!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Want to add another book?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" autoFocus onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
              Save Changes
               </Button>
            </Modal.Footer>
          </Modal> */}
      </form>
    {/* </div> */}
    </div>
  )
}

export default AddBooks;