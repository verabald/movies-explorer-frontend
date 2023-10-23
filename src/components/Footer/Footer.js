import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__box'>
      <p className="footer__copyright">&copy;&nbsp;2023</p>
      <ul className="footer__links">
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__link"
            href="https://github.com/verabald"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
