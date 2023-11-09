import MoviesCardRadio from './MoviesCardRadio/MoviesCardRadio';
import MoviesCardButton from './MoviesCardButton/MoviesCardButton';
import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, onDelete, onSave }) {
  const { pathname } = useLocation();
  const url = 'https://api.nomoreparties.co';

  function handlerSaveMovie() {
    onSave();
  }

  function handlerDeleteMovie() {
    onDelete();
  }

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
          src={pathname === '/movies' ? `${url}/${movie.image.url}` : movie.image}
        />
      </a>
      <div className="movies-card__box">
        <div className="movies-card__article">
          <h2 className="movies-card__title"> {movie.nameRU}</h2>
          <p className="movies-card__caption"> {movie.duration}</p>
        </div>
        {pathname === '/movies' ? (
          <MoviesCardRadio onClick={handlerSaveMovie} />
        ) : (
          <MoviesCardButton onClick={handlerDeleteMovie} />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
