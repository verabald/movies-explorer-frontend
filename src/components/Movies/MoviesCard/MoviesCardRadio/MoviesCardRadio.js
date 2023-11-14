import './MoviesCardRadio.css';

function MoviesCardRadio({ type, onClick }) {
  return (
    <button
      className={`movies-card__radio ${type}`}
      type="button"
      onClick={onClick}
    ></button>
  );
}

export default MoviesCardRadio;
