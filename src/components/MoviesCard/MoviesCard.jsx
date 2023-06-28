import './MoviesCard.css';
import { getCalculatingTimeMoveie } from '../../utils/convertMinutes';
import { useLocation } from 'react-router';

const MoviesCard = ({ movie, deleteMovie, addMovies }) => {
  let location = useLocation();
  const isLikedButton = location.pathname === '/movies';
  const isDeleteBtn = location.pathname === '/saved-movies';
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
  const isLiked = savedMovies.some((i) => {
    return i.nameRU === movie.nameRU;
  });
  const saveMovie = savedMovies.find((i) => i.movieId === movie.id);
  const imageUrl = movie.image.url
    ? `https://api.nomoreparties.co${movie?.image.url}`
    : movie.image;

  return (
    <section className="movies-card">
      {isLikedButton && (
        <button
          className={`movies-card__btn ${
            isLiked ? 'movies-card__btn_activ' : ''
          }`}
          type="submit"
          onClick={() => addMovies(movie, isLiked, saveMovie?._id)}
        />
      )}
      {isDeleteBtn && (
        <button
          className="movies-card__btn-delete"
          type="submit"
          onClick={() => deleteMovie(movie._id)}
        />
      )}
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      <p className="movies-card__time">
        {getCalculatingTimeMoveie(movie.duration)}
      </p>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img alt="обложка фильма" src={imageUrl} className="movies-card__img" />
      </a>
    </section>
  );
};

export default MoviesCard;
