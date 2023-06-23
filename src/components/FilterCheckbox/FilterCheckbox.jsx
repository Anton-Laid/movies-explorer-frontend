import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ handleShortFilms }) => {
  return (
    <div className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__input" id="switch" />
      <label
        className="filter-checkbox__label"
        htmlFor="switch"
        onClick={() => handleShortFilms()}
      />
      <span className="filter-checkbox__title"> Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;
