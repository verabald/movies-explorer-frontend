import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/header-logo.svg';

function Header({ isSigned }) {
  const location = useLocation();

  return (
    <header
      className={`header ${location.pathname !== '/' ? 'header_dark' : ''}`}
    >
      <Link
        className="header__link"
        to="/"
      >
        <img className="header__logo" src={logo} alt="Зелёный круг с белой буквой С внутри" />
      </Link>
      <Navigation isSigned={isSigned} />
    </header>
  );
}

export default Header;
