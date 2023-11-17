import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';

import './Profile.css';
import Header from '../Header/Header';
import useFormWithValidation from '../../utils/validation.js';

function Profile({ onSignOut, onEdit, isSigned, statusEdit }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, resetFrom, isValid } = useFormWithValidation(currentUser);
  const { text } = statusEdit;

  const [isEdit, setIsEdit] = useState(false);
  const [isStatus, setIsStatus] = useState('');
  const isDisabled = !isValid;

  const typeButton = `profile__save ${isDisabled && 'profile__save_disabled'}`;
  const typeInput = `profile__input ${!isEdit && 'profile__input_disabled'}`;

  function handleEdit() {
    resetFrom(currentUser, {}, false);
    setIsEdit(true);
    setIsStatus('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEdit(false);
    onEdit(values);
  }

  useEffect(() => {
    if (text) {
      setIsStatus(text);
    }
  }, [text]);

  useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, false);
    }
  }, [currentUser, resetFrom]);

  return (
    <>
      <Header isSigned={isSigned} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__input-title">
              Имя
              <input
                value={values.name || ''}
                className={typeInput}
                id="name"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                required
                placeholder="Например, Виталий"
                onChange={handleChange}
                disabled={!isEdit}
              />
            </label>
            <label className="profile__input-title">
              E-mail
              <input
                value={values.email || ''}
                className={typeInput}
                id="email"
                type="email"
                name="email"
                placeholder="pochta@yandex.ru"
                onChange={handleChange}
                disabled={!isEdit}
              />
            </label>
            {!isEdit && <span className="profile__message">{isStatus}</span>}
            {isEdit ? (
              <button
                className={typeButton}
                type="submit"
                disabled={isDisabled}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__edit"
                  type="button"
                  onClick={handleEdit}
                >
                  Редактировать
                </button>
                <Link className="profile__close" onClick={onSignOut}>
                  Выйти из аккаунта
                </Link>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
