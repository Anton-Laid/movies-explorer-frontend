import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movi, addMovies, deleteMovie }) => {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {movi.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              key={movie?.id || movie?.movieId}
              addMovies={addMovies}
              deleteMovie={deleteMovie}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoviesCardList;

// movi?.slice(0, 12).map((movie) => {
//   return (
//     <MoviesCard
//       movie={movie}
//       key={movie?.id || movie?.movieId}
//       addMovies={addMovies}
//       deleteMovie={deleteMovie}
//     />
//   );
// })
