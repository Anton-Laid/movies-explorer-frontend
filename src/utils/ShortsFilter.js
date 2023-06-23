export const filterMovies = (searchQuery, moviesArray) => {
  return moviesArray.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const findOnlyShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration < 40);
};

// const filterFilm = movi.filter((m) => {
//   let film;
//   if (shortFilms) {
//     return (
//       m.duration <= 40 &&
//       m.nameRU.toLowerCase().includes(filteredMovies.toLowerCase())
//     );
//   } else if (!shortFilms) {
//     film = m.nameRU.toLowerCase().includes(filteredMovies.toLowerCase());
//   }
//   return film;
// });
