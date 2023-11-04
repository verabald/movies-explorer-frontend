
import MoviesCardRadio from './MoviesCardRadio/MoviesCardRadio';
import MoviesCardButton from './MoviesCardButton/MoviesCardButton';
import './MoviesCard.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, isSaved, onDelete, onSave }) {
  const { pathname } = useLocation();

  const [isSave, setIsSave] = useState(false);

  function handlerSaveMovie() {
    onSave();
  }

  function handlerDeleteMovie() {
    onDelete();
  }

  useEffect(() => {
    if (isSaved) {
      const result = isSaved.some((item) => movie.id === item.movieId);
      setIsSave(result);
    }
  }, [isSaved]);

  return (
    <li className="movies-card">
      <a>
        className="movies-card__trailer" href={movie.trailerLink}
        target="_blank" rel="noopener noreferrer"
        <img
          className="movies-card__image"
          alt={movie.nameRu}
          src={movie.image}
        />
      </a>
      <div className="movies-card__box">
        <div className="movies-card__article">
          <h2 className="movies-card__title"> {movie.nameRU}</h2>
          <p className="movies-card__caption"> {movie.duration}</p>
        </div>
        {pathname === '/movies' ? <MoviesCardRadio onClick={handlerSaveMovie}/> : <MoviesCardButton onClick={handlerDeleteMovie}/>}
      </div>
    </li>
  );
}

export default MoviesCard;
