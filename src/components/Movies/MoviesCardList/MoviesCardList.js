import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({movies}) {
  return (
    <ul className="movies-list">
      {movies.map(() => (
        <MoviesCard />
      ))}
    </ul>
  );
}

export default MoviesCardList;
