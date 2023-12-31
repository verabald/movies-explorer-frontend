import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Login.css';
import logo from '../../images/header-logo.svg';

import useFormWithValidation from '../../utils/validation.js';

function Login({ onLogin, status }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();
  const isDisabled = !isValid;
  const { text } = status;

  function onLog(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

  return (
    <section className="login">
      <div className="login__container">
        <Link className="login__logo-link" to="/">
          <img
            className="login__logo"
            src={logo}
            alt="Зелёный круг с белой буквой С внутри"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={onLog}>
          <label className="login__input-title">
            E-mail
            <input
              value={values.email || ''}
              className="login__input"
              id="email"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              pattern={'^\\S+@\\S+\\.\\S+$'}
              required
              onChange={handleChange}
            />
            <span className="login__error" id="email-error">
              {errors.email || ''}
            </span>
          </label>
          <label className="login__input-title">
            Пароль
            <input
              value={values.password || ''}
              className="login__input"
              id="password"
              type="password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="Введите пароль"
              required
              onChange={handleChange}
            />
            <span className="login__error" id="password-error">
              {errors.password || ''}
            </span>
          </label>
          <span className="login__message">{text}</span>
          <button className="login__button" disabled={isDisabled}>
            Войти
          </button>
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
