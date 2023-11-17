import './MoviesCardButton.css';

function MoviesCardButton({ onClick }) {
  return <button className="movies-card__button" onClick={onClick} />;
}

export default MoviesCardButton;
