import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import './Movies.css';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      {/* <MoviesCardList />
      <Preloader /> */}
    </main>
  );
}

export default Movies;
