import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Register.css';
import logo from '../../images/header-logo.svg';
import mainApi from '../../utils/MainApi';

import useFormWithValidation from '../../utils/validation.js';

function Register() {
  const navigate = useNavigate();

  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();
  const [statusReg, setStatusReg] = useState({});
  const { text } = statusReg;

  const isDisabled = !isValid;

  function onRegister(evt) {
    evt.preventDefault();
    mainApi
      .register(values)
      .then((res) => {
        navigate('/signin', { replace: true })
      })
      .catch((err) => {
        if (err === 'Что-то пошло не так: 409') {
          setStatusReg({
            text: 'Пользователь с таким email уже существует',
          });
        } else {
          setStatusReg({
            text: 'При регистрации пользователя произошла ошибка',
          });
        }
      });
  }

  useEffect(() => {
    resetFrom({}, {}, false);
    setStatusReg('');
  }, [resetFrom]);

  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__logo-link" to="/">
          <img
            className="register__logo"
            src={logo}
            alt="Зелёный круг с белой буквой С внутри"
          />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={onRegister}>
          <label className="register__input-title">
            Имя
            <input
              value={values.name || ''}
              className="register__input"
              id="name"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Например, Виталий"
              required
              onChange={handleChange}
            />
            <span className="register__error" id="name-error">
              {errors.name || ''}
            </span>
          </label>
          <label className="register__input-title">
            E-mail
            <input
              value={values.email || ''}
              className="register__input"
              id="email"
              type="email"
              name="email"
              pattern={"^\\S+@\\S+\\.\\S+$"}
              placeholder="pochta@yandex.ru"
              required
              onChange={handleChange}
            />
            <span className="register__error" id="email-error">
              {errors.email || ''}
            </span>
          </label>
          <label className="register__input-title">
            Пароль
            <input
              value={values.password || ''}
              className="register__input"
              id="password"
              type="password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="Введите пароль"
              required
              onChange={handleChange}
            />
            <span className="register__error" id="password-error">
              {errors.password || ''}
            </span>
          </label>
          <span className="register__message">{text}</span>
          <button className="register__button" disabled={isDisabled}>
            Зарегистрироваться
          </button>
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
