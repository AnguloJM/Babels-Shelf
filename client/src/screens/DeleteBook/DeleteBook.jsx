import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Navlink, Link } from 'react-router-dom'
import {getOneBook, destroyBook} from '../../services/books'

const DeleteBook = (props) => {

  const [book, setBook] = useState({
    img_url: '',
    title: '',
    author: '',
    genre: ''
  });

  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchBook
  })

  return (
    <div>

    </div>
  )
}

export default DeleteBook;