import MoviesCardRadio from './MoviesCardRadio/MoviesCardRadio';
import MoviesCardButton from './MoviesCardButton/MoviesCardButton';
import convertDuration from '../../../utils/convert';
import './MoviesCard.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, isSaved, onDelete, onSave }) {
  const { pathname } = useLocation();
  const url = 'https://api.nomoreparties.co';
  const [isSave, setIsSave] = useState(false);

  function handlerSaveMovie() {
    onSave();
  }

  function handlerDeleteMovie() {
    onDelete();
  }

  useEffect(() => {
    if (isSaved) {
      const res = isSaved.some((item) => movie.id === item.movieId);
      setIsSave(res);
    }
  }, [isSaved]);

  return (
    <li className="movies-card">
      <a
        className="movies-card__trailer"
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="movies-card__image"
          alt={movie.nameRu}
          src={
            pathname === '/movies' ? `${url}/${movie.image.url}` : movie.image
          }
        />
      </a>
      <div className="movies-card__box">
        <div className="movies-card__article">
          <h2 className="movies-card__title"> {movie.nameRU}</h2>
          <p className="movies-card__caption">
            {convertDuration(movie.duration)}
          </p>
        </div>
        {pathname === '/movies' ? (
          <MoviesCardRadio
            type={isSave ? 'movies-card__radio_active' : 'movies-radio__button'}
            onClick={isSave ? handlerDeleteMovie : handlerSaveMovie}
          />
        ) : (
          <MoviesCardButton onClick={handlerDeleteMovie} />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
