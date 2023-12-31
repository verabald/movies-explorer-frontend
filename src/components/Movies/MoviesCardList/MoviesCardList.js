import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, isSaved, onDelete, onSave }) {
  const { pathname } = useLocation();
  return (
    <ul className="movies-list">
      {movies.map(({ _id, ...movie }) => (
        <MoviesCard
          isSaved={isSaved}
          onSave={() => {
            onSave(movie);
          }}
          onDelete={() => {
            pathname === '/movies' ? onDelete(movie) : onDelete(_id);
          }}
          movie={movie}
          key={movie.id || _id}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
