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
      <ul class="burger__list">
        <li class="burger__item">
          <Link className="burger__link" to="/">
            Главная
          </Link>
        </li>
        <li class="burger__item">
          <Link className="burger__link" to="/movies">
            Фильмы
          </Link>
        </li>
        <li class="burger__item">
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
