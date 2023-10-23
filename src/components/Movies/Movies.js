import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import movies from '../../utils/constants';
import './Movies.css';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movies}/>
    </main>
  );
}

export default Movies;
