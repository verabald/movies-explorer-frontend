import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input className="search__input" placeholder="Фильм" required />
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
