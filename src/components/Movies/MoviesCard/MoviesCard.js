import './MoviesCard.css';

function MoviesCard({ movie }) {
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
        <label className="movies-card__radio-label">
          <input
            className="movies-card__radio  movies-card__radio_type_default"
            type="radio" />
          <span className="movies-card__radio movies-card__radio_type_design" />
        </label>
      </div>
    </li>
  );
}

export default MoviesCard;
