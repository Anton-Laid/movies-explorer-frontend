import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movi, addMovies, deleteMovie }) => {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {movi.length > 0 ? (
          movi.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie?.id || movie?.movieId}
                addMovies={addMovies}
                deleteMovie={deleteMovie}
              />
            );
          })
        ) : (
          <span className="movies-card-list__massege">
            Ничего не найдено 😔
          </span>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;
