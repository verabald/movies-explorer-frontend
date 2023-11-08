import './MoviesCardRadio.css';

function MoviesCardRadio({ onClick }) {
  return (
    <label className="movies-card__radio-label">
      <input
        className="movies-card__radio-input  movies-card__radio-input_type_default"
        type="radio"
        onChange={onClick}
      />
      <span className="movies-card__radio-input movies-card__radio-input_type_design" />
    </label>
  );
}

export default MoviesCardRadio;
