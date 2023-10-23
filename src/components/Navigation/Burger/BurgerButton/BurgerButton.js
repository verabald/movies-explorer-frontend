import './BurgerButton.css';

function BurgerButton({ onClick }) {
  return (
    <button className="burger-button" onClick={onClick} type="button"></button>
  );
}

export default BurgerButton;
