import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import movies from '../../utils/constants';
import './Movies.css';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <button className="movies__button" type="button">
        Ещё
      </button>
    </main>
  );
}

export default Movies;
