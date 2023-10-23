import { Link } from 'react-router-dom';
import './NavLogout.css';

function NavLogout() {
	return (
		<ul className="nav-logout">
			<li className="nav-logout__item">
				<Link className="nav-logout__link-reg" to="/signup">Регистрация</Link>
			</li>
			<li className="nav-logout__item">
				<Link className="nav-logout__link-log" to="/signin">Войти</Link>
			</li>
		</ul>
	)
}

export default NavLogout;