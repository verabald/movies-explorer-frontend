import './Promo.css';
import pic from '../../../images/promo-pic.svg';
import { Link } from 'react-scroll';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        className="promo__pic"
        src={pic}
        alt="Карта мира созданная из слова web"
      />
      <div className="promo__box">
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его
          создателя.
        </p>
        <Link
          className="promo__button"
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Узнать больше
        </Link>
      </div>
    </section>
  );
}

export default Promo;
