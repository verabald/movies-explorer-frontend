import './MoviesCardRadio.css';

function MoviesCardRadio() {
  return (
    <label className="movies-card-radio__label">
      <input
        className="movies-card-radio__input  movies-card-radio__input_type_default"
        type="radio"
      />
      <span className="movies-card-radio__input movies-card-radio__input_type_design" />
    </label>
  );
}

export default MoviesCardRadio;
