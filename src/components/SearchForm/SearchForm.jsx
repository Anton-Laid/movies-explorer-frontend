import React, { useState } from 'react';
import './SearchForm.css';
import inputButton from '../../images/top.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import btn from '../../images/icon.svg';

const SearchForm = () => {
  const [movie, setMovie] = useState('');

  return (
    <div className="search-form">
      <form>
        <img alt="лупа" src={btn} className="search-form__magnifier" />
        <input
          className="search-form__input"
          id="search-form"
          name="inputPassword"
          type="text"
          required
          autoComplete="off"
          placeholder="Фильм"
          value={movie || ''}
          minLength="2"
          maxLength="40"
          onChange={(e) => setMovie(e.target.value)}
        />

        <button type="submit" className="search-form__button">
          <img
            alt="кнопка"
            src={inputButton}
            className="search-form__button-img"
          />
        </button>

        <div className="search-form__line" />
        <FilterCheckbox />
      </form>
    </div>
  );
};

export default SearchForm;
