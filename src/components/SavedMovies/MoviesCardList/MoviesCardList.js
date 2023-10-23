import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <ul className="movies-list">
      {movies.map(({ _id, ...movie }) => (
        <MoviesCard key={_id} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
