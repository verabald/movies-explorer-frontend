import { Link, useLocation } from 'react-router-dom';
import './NavLogin.css';

function NavLogin() {
  const location = useLocation();

  return (
    <div className="nav-login">
      <ul className="nav-login__list">
        <li className="nav-login__item">
          <Link
            className="nav-login__link nav-login__link_path_movies"
            to="/movies"
          >
            Фильмы
          </Link>
        </li>
        <li className="nav-login__item">
          <Link
            className="nav-login__link nav-login__link_path_saved"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <div className="nav-login__box">
        <Link
          className="nav-login__link nav-login__link_path_profile"
          to="/profile"
        >
          Аккаунт
          <div
            className={`nav-login__icon ${
              location.pathname === '/' ? 'nav-login__icon_light' : ''
            }`}
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default NavLogin;
