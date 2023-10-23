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
        <button className="movies-card__button" />
      </div>
    </li>
  );
}

export default MoviesCard;
