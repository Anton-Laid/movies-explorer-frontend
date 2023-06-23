import './SearchForm.css';
import inputButton from '../../images/top.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import btn from '../../images/icon.svg';
import { useState, useEffect } from 'react';

const SearchForm = ({ handleSearch, defaultValue }) => {
  const [movieName, setMovieName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  function handleChangeMovieName(e) {
    setMovieName(e.target.value);
  }

  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked;
    setCheckbox(isShortFilms);
    handleSearch(movieName, isShortFilms);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(movieName, checkbox);
  }

  useEffect(() => {
    setMovieName(defaultValue);
    setCheckbox(JSON.parse(localStorage.getItem('shortFilms')) || false);
  }, []);

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <img alt="лупа" src={btn} className="search-form__magnifier" />

        <input
          className="search-form__input"
          name="search"
          type="search"
          required
          value={movieName || ''}
          autoComplete="off"
          placeholder="Фильм"
          min="1"
          onChange={handleChangeMovieName}
        />
        <button type="submit" className="search-form__button">
          <img
            alt="кнопка"
            src={inputButton}
            className="search-form__button-img"
          />
        </button>

        <div className="search-form__line" />

        {/* <FilterCheckbox /> */}
        <div className="filter-checkbox">
          <input
            type="checkbox"
            className="filter-checkbox__input"
            id="switch"
            checked={checkbox}
            onChange={handleChangeCheckbox}
          />
          <label className="filter-checkbox__label" htmlFor="switch" />
          <span className="filter-checkbox__title"> Короткометражки</span>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
