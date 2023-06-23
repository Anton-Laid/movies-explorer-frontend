import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

const SavedMovies = ({ isLoading, movi, deleteMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleSearch(movieName, isShortFilms) {
    const filteredMovies = movi.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(filteredMovies);
    }
  }

  function initFilteredMovies() {
    setFilteredMovies(movi);
  }

  useEffect(() => {
    setFilteredMovies(filteredMovies);
  }, [movi, filteredMovies]);

  useEffect(() => {
    initFilteredMovies();
  }, [movi]);

  return (
    <>
      <section className="movies">
        <SearchForm handleSearch={handleSearch} defaultValue="" />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movi={filteredMovies} deleteMovie={deleteMovie} />
        )}
      </section>
    </>
  );
};

export default SavedMovies;
