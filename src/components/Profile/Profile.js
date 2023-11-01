import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__form">
            <label className="profile__input-title">
              Имя
              <input
                className="profile__input"
                id="name"
                type="name"
                name="name"
                placeholder="Например, Виталий"
              />
            </label>
            <label className="profile__input-title">
              E-mail
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                placeholder="pochta@yandex.ru"
              />
            </label>
            <span className="profile__error profile__button-hidden" id="error">
              При обновлении профиля произошла ошибка.
            </span>
            <button className="profile__save profile__button-hidden" type="submit">
              Сохранить
            </button>
            <button className="profile__edit" type="button">
              Редактировать
            </button>
          </form>
        </div>
        <Link className="profile__close" to="/">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
