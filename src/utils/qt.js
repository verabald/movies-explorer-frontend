const screenMobile = 480;
const screenTablet = 1024;

const qtMoviesMobile = { moviesOnPage: 5, moreMovies: 2 };
const qtMoviesTablet = { moviesOnPage: 8, moreMovies: 2 };
const qtMoviesDesktop = { moviesOnPage: 16, moreMovies: 4 };

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
