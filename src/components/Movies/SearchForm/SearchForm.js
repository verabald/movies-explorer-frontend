import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch }) {
  const { pathname } = useLocation();

  const [request, setRequest] = useState(() => {
    if (pathname === '/movies') {
      const req = localStorage.getItem('request') || '';
      return req;
    } else return '';
  });

  const [isShorts, setIsShorts] = useState(() => {
    if (pathname === '/movies') {
      const shorts = JSON.parse(localStorage.getItem('shorts')) || false;
      return shorts;
    } else return false;
  });

  function handleChange({ target }) {
    setRequest(target.value);
  }

  const handleShortsCheck = () => {
    onSearch(request, !isShorts);
    setIsShorts(!isShorts);
  };

  function handleSearch(e) {
    e.preventDefault();
    onSearch(request, isShorts);
  }

  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          value={request}
          placeholder="Фильм"
          required
          onChange={handleChange}
        />
        <button
          className="search__button"
          type="submit"
          onClick={handleSearch}
        ></button>
      </form>
      <FilterCheckbox isShorts={isShorts} onCheck={handleShortsCheck} />
    </section>
  );
}

export default SearchForm;
