import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState } from 'react';

const Movies = ({
  movi,
  isLoading,
  deleteMovie,
  addMovies,
  handleShowMore,
}) => {
  const [filteredMovies, setFilteredMovies] = useState('');
  const [shortFilms, setShortFilms] = useState(false);
  const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));

  const filterFilm = movi.filter((m) => {
    let film;
    if (shortFilms) {
      return (
        m.duration <= 40 &&
        m.nameRU.toLowerCase().includes(filteredMovies.toLowerCase())
      );
    } else if (!shortFilms) {
      film = m.nameRU.toLowerCase().includes(filteredMovies.toLowerCase());
    }
    return film;
  });

  const handleShortFilms = () => {
    setShortFilms(!shortFilms);
  };

  return (
    <section className="movies">
      <SearchForm
        handleShortFilms={handleShortFilms}
        setFilteredMovies={setFilteredMovies}
        filteredMovies={filteredMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movi={filterFilm}
          addMovies={addMovies}
          deleteMovie={deleteMovie}
        />
      )}
      {movi.length > foundMovies ? (
        <button className="movies__btn" onClick={handleShowMore} type="button">
          Ещё
        </button>
      ) : (
        ''
      )}
    </section>
  );
};

export default Movies;
