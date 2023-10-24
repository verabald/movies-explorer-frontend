import './AboutMe.css';
import me from '../../../images/aboutme-me.png';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__head">Студент</h2>
      <h3 className="about-me__name">Виталий</h3>
      <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
      <p className="about-me__text">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена <br /> и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
        Недавно начал кодить. С <br /> 2015 года работал в компании «СКБ
        Контур». После того, как прошёл курс по веб- <br /> разработке, начал
        заниматься фриланс-заказами и ушёл с постоянной работы.
      </p>
      <a
        className="about-me__link"
        href="https://github.com/verabald"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <img className="about-me__img" src={me} alt="Портрет" />
    </section>
  );
}

export default AboutMe;
