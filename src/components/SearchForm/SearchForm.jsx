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
          value={movieName || ''}
          autoComplete="off"
          placeholder="Фильм"
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
        <FilterCheckbox handleChange={handleChangeCheckbox} />
      </form>
    </div>
  );
};

export default SearchForm;
