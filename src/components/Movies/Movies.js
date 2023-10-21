import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MoviesCard from './MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import './Movies.css';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <MoviesCard />
      <Preloader />
    </main>
  );
}

export default Movies;
