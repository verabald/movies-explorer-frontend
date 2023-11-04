import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';
import logo from '../../images/header-logo.svg';
import mainApi from '../../utils/MainApi';

function Login({
  onSignIn,
  onChange,
  setAuthCheck,
  setEmail,
  values,
  setValue,
}) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  function onLog(evt) {
    evt.preventDefault();

    mainApi
      .login(values)
      .then((data) => {
        localStorage.setItem('token', data.token);
        onSignIn(true);
        setEmail(data.email);
        setPassword(values.password);
        setValue({ email: '', password: '' });
        navigate('/movies', { replace: true });
      })
      .catch(() => {
        setAuthCheck(false);
      });
  }
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
              value={values.email}
              className="login__input"
              id="email"
              type="email"
              name="email"
              placeholder="pochta@yandex.ru"
              required
              onChange={onChange}
            />
          </label>
          <span className="login__error" id="email-error"></span>
          <label className="login__input-title">
            Пароль
            <input
              value={values.password}
              className="login__input"
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
