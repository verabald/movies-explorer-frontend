import { Link } from 'react-router-dom';
import './NavLogin.css';

function NavLogin() {
  return (
    <>
      <ul className="nav-login__list">
        <li className="nav-login__item">
          <Link className="nav-login__link" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="nav-login__item">
          <Link className="nav-login__link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <div className="nav-login__box">
        <Link className="nav-login__link_path_profile" to="/profile">
          Аккаунт
        </Link>
      </div>
    </>
  );
}

export default NavLogin;
