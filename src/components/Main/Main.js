import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import NavTab from './NavTab/NavTab';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <AboutMe />
      <AboutProject />
      <NavTab />
      <Portfolio />
      <Promo />
      <Techs />
    </main>
  );
}

export default Main;
