import './MoviesCard.css';

function MoviesCard() {
  return (
    <li className="movies-card">
      <img className="movies-card__image" />
      <div className="movies-card__box">
        <div className="movies-card__article">
          <h2 className="movies-card__title"></h2>
          <p className="movies-card__caption"></p>
        </div>
        <button className="movies-card__button" />
      </div>
    </li>
  );
}

export default MoviesCard;
