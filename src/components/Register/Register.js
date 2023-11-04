import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';
import logo from '../../images/header-logo.svg';
import mainApi from '../../utils/MainApi';

function Register({ onChange, setAuthCheck, setEmail, values, setValue }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function onRegister(evt) {
    evt.preventDefault();

    mainApi
      .register(values)
      .then((data) => {
        setEmail(data.email);
        setName(values.name);
        setPassword(values.password);
        setValue({ name: '', email: '', password: '' });
        setAuthCheck(true);
        navigate('/signin', { replace: true });
      })
      .catch(() => {
        setAuthCheck(false);
      });
  }

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
              value={values.name}
              className="register__input"
              id="name"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Например, Виталий"
              required
              onChange={onChange}
            />
          </label>
          <span className="register__error" id="name-error"></span>
          <label className="register__input-title">
            E-mail
            <input
              value={values.email}
              className="register__input"
              id="email"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              required
              onChange={onChange}
            />
          </label>
          <span className="register__error" id="email-error"></span>
          <label className="register__input-title">
            Пароль
            <input
              value={values.password}
              className="register__input"
              id="password"
              type="password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="Введите пароль"
              required
              onChange={onChange}
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
