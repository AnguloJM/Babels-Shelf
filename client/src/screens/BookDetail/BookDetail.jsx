import React, {useState, useEffect} from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { renderOneFavorite } from '../../services/favorites';

const BookDetails = () => {
  const [book, setBook] = useState(null)
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await renderOneFavorite(id);
      setBook(book);
      setLoaded(true);
    }
    fetchBook();
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h3>hello</h3>
    </div>
  )
}