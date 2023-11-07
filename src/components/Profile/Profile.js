import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ onSignOut, onEdit, isSigned }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    console.log(currentUser);
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onEdit({
      name,
      email,
    });
  }

  return (
    <>
      <Header isSigned={isSigned} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__input-title">
              Имя
              <input
                value={name || ""}
                className="profile__input"
                id="name"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                required
                placeholder="Например, Виталий"
                onChange={handleChangeName}
              />
            </label>
            <label className="profile__input-title">
              E-mail
              <input
                value={email || ""}
                className="profile__input"
                id="email"
                type="email"
                name="email"
                placeholder="pochta@yandex.ru"
                onChange={handleChangeEmail}
              />
            </label>
            <span className="profile__error profile__button-hidden" id="error">
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className="profile__save profile__button-hidden"
              type="submit"
            >
              Сохранить
            </button>
            <button className="profile__edit" type="button">
              Редактировать
            </button>
          </form>
        </div>
        <Link className="profile__close" onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
