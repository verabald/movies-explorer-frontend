import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import movies from '../../utils/constants';
import './SavedMovies.css';

function SavedMovies() {
  return <main className="saved-movies">
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  </main>;
}

export default SavedMovies;
