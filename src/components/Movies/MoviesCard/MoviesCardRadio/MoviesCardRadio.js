import './MoviesCardRadio.css';

function MoviesCardRadio() {
  return (
    <label className="movies-card__radio-label">
      <input
        className="movies-card__radio-input  movies-card__radio-input_type_default"
        type="radio"
      />
      <span className="movies-card__radio-input movies-card__radio-input_type_design" />
    </label>
  );
}

export default MoviesCardRadio;
