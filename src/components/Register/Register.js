import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/header-logo.svg';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link
          className="register__logo-link"
          to="/"
        >
          <img className="register__logo" src={logo} alt="Зелёный круг с белой буквой С внутри" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__input-title">
            Имя
            <input
              className="register__input"
              id="name"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Например, Виталий"
              required
            />
          </label>
          <span className="register__error" id="name-error"></span>
          <label className="register__input-title">
            E-mail
            <input
              className="register__input"
              id="email"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              required
            />
          </label>
          <span className="register__error" id="email-error"></span>
          <label className="register__input-title">
            Пароль
            <input
              className="register__input"
              id="password"
              type="password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="Введите пароль"
              required
            />
          </label>
          <span className="register__error" id="password-error"></span>
          <button className="register__button">Зарегистрироваться</button>
        </form>
      </div>
      <p className="register__caption">
        Уже зарегистрированы?{' '}
        <Link className="register__button-login" to="/signin">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
