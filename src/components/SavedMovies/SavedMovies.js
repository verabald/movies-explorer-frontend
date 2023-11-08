import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import filterMovies from '../../utils/filter';
import mainApi from '../../utils/MainApi';
import './SavedMovies.css';

import { useState } from 'react';

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);

  const [isSavedMovies, setIsSavedMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites'));
  });
  const [resultOfSearch, setResultOfSearch] = useState(isSavedMovies);

  function handleSearch(req, short) {
    const currentResult = isSavedMovies.filter((movie) =>
      filterMovies(movie, req, short)
    );
    if (currentResult.length === 0) {
      setIsNothing(true);
      setResultOfSearch([]);
    } else {
      setIsNothing(false);
      setResultOfSearch(currentResult);
    }
  }

  function handleRemove(id) {
    return mainApi
      .removeMovie(id)
      .then(() => {
        const moviesFav = isSavedMovies.filter((item) => item._id !== id);
        setIsSavedMovies(moviesFav);

        const movieToShow = resultOfSearch.filter((item) => item._id !== id);
        setResultOfSearch(movieToShow);
        localStorage.setItem('favorites', JSON.stringify(moviesFav));
      })
      .catch(console.error);
  }

  return (
    <main className="saved-movies">
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={resultOfSearch} onDelete={handleRemove} />
      )}
      {isNothing ? (
        <span className="saved-movies__nothing">Ничего не найдено</span>
      ) : null}
    </main>
  );
}

export default SavedMovies;
