import { useLocation } from 'react-router-dom';
import MoviesCardRadio from './MoviesCardRadio/MoviesCardRadio';
import MoviesCardButton from './MoviesCardButton/MoviesCardButton';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const { pathname } = useLocation();
  return (
    <li className="movies-card">
      <img
        className="movies-card__image"
        alt={movie.nameRu}
        src={movie.image}
      />
      <div className="movies-card__box">
        <div className="movies-card__article">
          <h2 className="movies-card__title"> {movie.nameRU}</h2>
          <p className="movies-card__caption"> {movie.duration}</p>
        </div>
        {pathname === '/movies' ? <MoviesCardRadio /> : <MoviesCardButton />}
      </div>
    </li>
  );
}

export default MoviesCard;
