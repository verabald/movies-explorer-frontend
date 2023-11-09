import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Login.css';
import logo from '../../images/header-logo.svg';
import mainApi from '../../utils/MainApi';

import useFormWithValidation from '../../utils/validation.js';

function Login({ onSignIn }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();
  const navigate = useNavigate();
  const [statusLog, setStatusLog] = useState({});
  const { text } = statusLog;
  const isDisabled = !isValid;

  function onLog(evt) {
    evt.preventDefault();

    mainApi
      .login(values)
      .then((res) => {
        localStorage.setItem('token', res.token);
        onSignIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        if (err === 'Что-то пошло не так: 401') {
          setStatusLog({
            text: 'Неверный логин или пароль',
          });
        } else {
          setStatusLog({
            text: 'При входе произошла ошибка',
          });
        }
      });
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
