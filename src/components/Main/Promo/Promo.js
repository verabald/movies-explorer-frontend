import './Promo.css';
import pic from '../../../images/promo-pic.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента <br /> факультета <br /> Веб-разработки.
      </h1>
      <img
        className="promo__pic"
        src={pic}
        alt="Карта мира созданная из слова web"
      />
      <div className="promo__box">
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот <br /> проект и его
          создателя.
        </p>
        <button className="promo__button">Узнать больше</button>
      </div>
    </section>
  );
}

export default Promo;
