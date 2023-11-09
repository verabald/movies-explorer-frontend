import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { handleQtMovies } from '../../utils/qt';
import filterMovies from '../../utils/filter';
import './Movies.css';

import { useEffect, useState, useCallback } from 'react';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

  const [number, setNumber] = useState(handleQtMovies());
  const [numberOfMovies, setNumberOfMovies] = useState(number.moviesOnPage);

  const [resultOfSearch, setResultOfSearch] = useState(() => {
    return JSON.parse(localStorage.getItem('currentResult')) || [];
  });
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

  function handleSearch(req, shorts) {
    setNumberOfMovies(number.moviesOnPage);
    localStorage.setItem('request', req);
    localStorage.setItem('shorts', JSON.stringify(shorts));
    if (req === '') {
      return;
    }
    const currentResult = initialMovies.filter((movie) =>
      filterMovies(movie, req, shorts)
    );
    if (currentResult.length === 0) {
      setIsNothing(true);
      setResultOfSearch(currentResult);
    } else {
      setIsNothing(false);
      setResultOfSearch(currentResult);
      localStorage.setItem('currentResult', JSON.stringify(currentResult));
    }
  }

  function handleShowingMore() {
    setNumberOfMovies((prev) => prev + number.moreMovies);
  }

  const resize = useCallback(() => {
    setNumber(handleQtMovies());
  }, [number]);

  useEffect(() => {
    window.addEventListener('resize', resize);
    setNumberOfMovies(number.moviesOnPage);
    return () => window.removeEventListener('resize', resize);
  }, [resize, number]);

  const movieToShow = resultOfSearch.slice(0, numberOfMovies);

  useEffect(() => {
    setIsShowingMore(resultOfSearch.length > movieToShow.length);
  }, [resultOfSearch, movieToShow]);

  function handleSave(movie) {
    console.log(movie);
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
    localStorage.setItem('favorites', JSON.stringify(savedMovies));
  }, [savedMovies]);

  return (
    <main className="movies">
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movieToShow}
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
          onClick={handleShowingMore}
        >
          Ещё
        </button>
      ) : null}
    </main>
  );
}

export default Movies;
