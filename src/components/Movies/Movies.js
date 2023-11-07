import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import './Movies.css';

import { useEffect, useState, useCallback } from 'react';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  const [isShowingMore, setisShowingMore] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

  const [initialMovies, setInitialMovies] = useState(() => {
    const movies =
      JSON.parse(localStorage.getItem('initialMovies')) || getMovies();
    return movies;
  });

  function getMovies() {
    setIsLoading(true);
    return moviesApi
      .getMovies()
      .then((res) => {
        localStorage.setItem('initialMovies', JSON.stringify(res));
        setInitialMovies(res);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  function handleSave(movie) {
    return mainApi
      .saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch(console.error);
  }

  function handleRemove(movie) {
    const movieId = savedMovies.find((item) => movie.id === item.movieId)._id;
    return mainApi
      .remove(movieId)
      .then(() => {
        const movies = savedMovies.filter((item) => item._id !== movieId);
        setSavedMovies(movies);
      })
      .catch(console.error);
  }

  function handleGetMovies() {
    return mainApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch(console.error);
  }

  useEffect(() => {
    handleGetMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <main className="movies">
      <SearchForm 
      // onSearch={handleSearch}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={initialMovies}
          isSaved={savedMovies}
          onDelete={handleRemove}
          onSave={handleSave}
        />
      )}
      {isNothing ? (
        <span className="movies__nothing">Ничего не найдено</span>
      ) : null}
      {isShowingMore ? (
        <button
          className="movies__button"
          type="button"
          // onClick={handleMoreMovies}
        >
          Ещё
        </button>
      ) : null}
    </main>
  );
}

export default Movies;
