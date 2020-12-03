import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { renderOneBook, updateBook } from '../../services/books';

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
    return <Redirect to={`/myShelf/`}/>
  }

  return (
    <>
    <div className="edit-header">
      <Link id="return" to="/myShelf">Return</Link>
      <h1 id="edit-message">Edit Book</h1>
    </div>
    <div className="lesson-edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="inputs">
            <div className="img-box">
            <label htmlFor="img_url">Image Link</label>
            <input
              className="input-img"
              type="text"
              value={books.img_url}
              name="img_url"
              autoFocus
              onChange={handleChange}
            />
          </div>
            <div className="title-box">
            <label htmlFor="title">Title</label>
            <input
              className="input-title"
              type="text"
              value={books.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
            />  
          </div>
            <div className="author-box">
            <label htmlFor="author">Author</label>
            <input
              className="input-author"
              type="text"
              value={books.author}
              name='author'
              required
              autoFocus
              onChange={handleChange}
            />  
            </div>
            <div className="genre-box">
            <label htmlFor="genre">Genre</label>
            <input
              className="input-genre"
              type="text"
              value={books.genre}
              name='genre'
              required
              autoFocus
              onChange={handleChange}
            />  
          </div>
          </div>
          <button type='submit' id="edit-save-button">Save</button>
      </form>
    </div>
    </>
  )
}

export default EditBook;