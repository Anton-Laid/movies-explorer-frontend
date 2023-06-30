import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({
  movi,
  isLoading,
  deleteMovie,
  addMovies,
  handleSearch,
  handleShowMore,
  defaultValue,
  renderMovi,
}) => {
  const foundMovies = JSON.parse(localStorage.getItem('foundMovies')) || [];

  return (
    <section className="movies">
      <SearchForm handleSearch={handleSearch} defaultValue={defaultValue} />
      {renderMovi ? (
        ''
      ) : (
        <span className="movies__search-movies">
          Пора искать фильмы 👀 Нажимай на кнопку 😆👆
        </span>
      )}
      {isLoading ? (
        <Preloader />
      ) : renderMovi ? (
        <MoviesCardList
          movi={movi}
          handleSearch={handleSearch}
          addMovies={addMovies}
          deleteMovie={deleteMovie}
        />
      ) : (
        ''
      )}
      {renderMovi ? (
        movi.length < foundMovies.length ? (
          <button
            className="movies__btn"
            onClick={handleShowMore}
            type="button"
          >
            Ещё
          </button>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </section>
  );
};

export default Movies;
