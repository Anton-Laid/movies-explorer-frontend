import { MAIN_URL, IMAGE_URL } from '../utils/constans';

const handelResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export const getMovies = async () => {
  try {
    const response = await fetch(
      'https://api.nomoreparties.co/beatfilm-movies'
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const createMovi = (movie) => {
  return fetch(`${MAIN_URL}/movies/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${IMAGE_URL}${movie.image.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.trailerLink,
      movieId: movie.id,
      trailerLink: movie.trailerLink,
    }),
  }).then(handelResponse);
};

export const deleteMovies = (id) => {
  return fetch(`${MAIN_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(handelResponse);
};

export const getSaveMovies = () => {
  return fetch(`${MAIN_URL}/movies/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(handelResponse);
};
