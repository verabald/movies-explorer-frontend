import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__head">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/verabald/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/verabald/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/verabald/react-mesto-auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
