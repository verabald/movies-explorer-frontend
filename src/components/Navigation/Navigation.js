import { useState } from 'react';
import Burger from './Burger/Burger';
import BurgerButton from './Burger/BurgerButton/BurgerButton';
import NavLogin from './NavLogin/NavLogin';
import NavLogout from './NavLogout/NavLogout';
import './Navigation.css';

function Navigation({ isSigned }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenBurger() {
    setIsOpen(true);
  }
  function handleCloseBurger() {
    setIsOpen(false);
  }

  return (
    <nav className="navigation">
      {isSigned ? (
        <>
          <NavLogin />
          <BurgerButton onClick={handleOpenBurger} />
        </>
      ) : (
        <NavLogout />
      )}
      <Burger isOpen={isOpen} isClose={handleCloseBurger} />
    </nav>
  );
}

export default Navigation;
