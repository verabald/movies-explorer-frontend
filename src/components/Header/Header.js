import './Header.css';
import logo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <a
        className="header__link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__logo" src={logo} alt="Логотип" />
      </a>
      <div className="header__box">
        <button className="header__button-reg">Регистрация</button>
        <button className="header__button-log">Войти</button>
      </div>
    </header>
  );
}

export default Header;
