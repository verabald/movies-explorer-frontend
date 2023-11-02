class MoviesApi {
  constructor() {
    this._url = 'https://api.nomoreparties.co/beatfilm-movies';
    this._headers = 'application/json';
  }

  _request(url, options) {
    return fetch(url, options).then(this._test);
  }

  _test(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getMovies() {
    return this._request(this._url, {
      headers: {
        'Content-Type': this._headers,
      },
    });
  }
}

const moviesApi = new MoviesApi();
export default moviesApi;
