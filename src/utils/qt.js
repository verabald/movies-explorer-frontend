const screenMobile = 426;
const screenTablet = 769;

const qtMoviesMobile = { moviesOnPage: 5, moreMovies: 2 };
const qtMoviesTablet = { moviesOnPage: 8, moreMovies: 2 };
const qtMoviesDesktop = { moviesOnPage: 12, moreMovies: 3 };

export function handleQtMovies() {
  const screen = window.innerWidth;
  if (screen <= screenMobile) {
    return qtMoviesMobile;
  } else if (screen <= screenTablet) {
    return qtMoviesTablet;
  } else {
    return qtMoviesDesktop;
  }
}
