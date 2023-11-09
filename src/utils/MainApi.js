class MainApi {
  constructor() {
    this._url = 'https://api.verbaldi.nomoredomainsrocks.ru';
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

  register({ name, email, password }) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        Accept: this._headers,
        'Content-Type': this._headers,
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  login({ email, password }) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': this._headers,
      },
      body: JSON.stringify({ email, password }),
    });
  }

  checkToken(jwt) {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: this._headers,
        'Content-Type': this._headers,
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  editProfile(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Accept: this._headers,
        'Content-Type': this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
  }

  getSavedMovies() {
    return this._request(`${this._url}/movies`, {
      headers: {
        'Content-Type': this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  saveMovie(movie) { console.log(movie);
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${'https://api.nomoreparties.co'}${
          movie.image.url
        }`,
        trailerLink: movie.trailerLink,
        thumbnail: `${'https://api.nomoreparties.co'}${
          movie.image.url
        }`,
        movieId: `${movie.id}`,
      }),
    });
  }

  removeMovie(movieId) {
    return this._request(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}

const mainApi = new MainApi();
export default mainApi;
