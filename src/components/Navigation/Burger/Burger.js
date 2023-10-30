import { Link } from 'react-router-dom';
import './Burger.css';

function Burger({ isOpen, isClose }) {
  return (
    <div className={isOpen ? 'burger burger_opened' : 'burger'}>
      <button
        className="burger__close"
        onClick={isClose}
        type="button"
      ></button>
      <ul className="burger__list">
        <li className="burger__item">
          <Link className="burger__link" to="/">
            Главная
          </Link>
        </li>
        <li className="burger__item">
          <Link className="burger__link burger__link_path_page" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="burger__item">
          <Link className="burger__link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link className="burger__link burger__link_path_profile" to="/profile">
        Аккаунт
        <div className="burger__icon"></div>
      </Link>
    </div>
  );
}

export default Burger;
