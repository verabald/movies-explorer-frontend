import './AboutMe.css';
import me from '../../../images/aboutme-me.png';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__head">Студент</h2>
      <h3 className="about-me__name">Вера</h3>
      <p className="about-me__subtitle">Фронтенд-разработчик, 26 лет</p>
      <p className="about-me__text">
        Я родилась и живу в Калуге, закончила филологический факультет КГУ. Недавно
        начала кодить. После курса по веб-разработке планирую дальше развиваться в этой сфере.
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
