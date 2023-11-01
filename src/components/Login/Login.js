import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/header-logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link
          className="login__logo-link"
          alt="Зелёный круг с белой буквой С внутри"
          to="/"
        >
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__input-title">
            E-mail
            <input
              className="login__input"
              id="email"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              required
            />
          </label>
          <span className="login__error" id="email-error"></span>
          <label className="login__input-title">
            Пароль
            <input
              className="login__input"
              id="password"
              type="password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="Введите пароль"
              required
            />
          </label>
          <span className="login__error" id="password-error"></span>
          <button className="login__button">Войти</button>
        </form>
      </div>
      <p className="login__caption">
        Ещё не зарегистрированы?{' '}
        <Link className="login__button-reg" to="/signup">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
