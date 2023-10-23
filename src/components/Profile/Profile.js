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
              />
            </label>
            <label className="profile__input-title">
              E-mail
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
              />
            </label>
            <button className="profile__button">Редактировать</button>
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
