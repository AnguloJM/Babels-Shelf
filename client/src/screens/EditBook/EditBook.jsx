import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { renderOneBook, updateBook } from '../../services/books';
import './EditBook.css'

const EditBook = (props) => {

  const [books, setBooks] = useState({
    img_url: '',
    title: '',
    author: '',
    genre: ''
  });

  const [isUpdate, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await renderOneBook(id);
      setBooks(book);
    }
    fetchBook();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooks({
      ...books,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateBook(id, books);
    setUpdated(updated);
  }

  if (isUpdate) {
    return <Redirect to={`/bookshelf/`}/>
  }

  return (
    <div>
    <div className="edit-header">
      <h1 id="edit-message">Edit Book</h1>
      </div>
      <Link to="/myShelf"><button id="return">Return</button></Link>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="edit-inputs">
            <input
              className="edit-img-box"
              placeholder="Image URL"
              type="text"
              value={books.img_url}
              name="img_url"
              autoFocus
              onChange={handleChange}
            />
            <br />
            <input
              className="edit-title-box"
              placeholder="Title"
              type="text"
              value={books.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />  
            <br />
            <input
              className="edit-author-box"
              placeholder="Author"
              type="text"
              value={books.author}
              name='author'
              required
              autoFocus
              onChange={handleChange}
            />  
            <br />
            <input
              className="edit-genre-box"
              placeholder="Genre"
              type="text"
              value={books.genre}
              name='genre'
              required
              autoFocus
              onChange={handleChange}
            />  
          </div>
          <button type='submit' id="edit-save-button">Save</button>
        </form>
    </div>
  )
}

export default EditBook;