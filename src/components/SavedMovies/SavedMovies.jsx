import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({ meMovies }) => {
  return (
    <>
      <section className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList meMovies={meMovies} />
      </section>
    </>
  );
};

export default SavedMovies;
