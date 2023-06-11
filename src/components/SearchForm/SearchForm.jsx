import React, { useState } from "react";
import "./SearchForm.css";
import inputButton from "../../images/top.png";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import magnifier from "../../images/magnifier.png";

const SearchForm = () => {
  const [movie, setMovie] = useState("");

  return (
    <>
      <section className="search-form">
        <img alt="лупа" src={magnifier} className="search-form__magnifier" />
        <input
          id="search-form"
          name="inputPassword"
          className="search-form__input"
          type="text"
          required
          autoComplete="off"
          placeholder="Фильм"
          value={movie || ""}
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
      </section>
    </>
  );
};

export default SearchForm;
