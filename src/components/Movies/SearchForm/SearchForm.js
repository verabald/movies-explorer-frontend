import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({onSearch}) {
  const { pathname } = useLocation();

  const [request, setReqest] = useState(() => {
    if (pathname === '/movies') {
      const req = localStorage.getItem("req") || ""
      return req
    } else return "";
  });

  const [isShort, setIsShort] = useState(() => {
    if (pathname === "/movies") {
      const short = JSON.parse(localStorage.getItem("short")) || false
      return short
    } else return false;
  });

  function handleChange({ target }) {
    setReqest(target.value);
  }

  const handleShortsCheck = () => {
    onSearch(request, !isShort);
    setIsShort(!isShort);
  }

  function handleSearch(e) {
    e.preventDefault();
    onSearch(request, isShort);
  }

  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" value={request} placeholder="Фильм" required onChange={handleChange} />
        <button className="search__button" type="submit" onClick={handleSearch}></button>
      </form>
      <FilterCheckbox checkHandler={handleShortsCheck}/>
    </section>
  );
}

export default SearchForm;
