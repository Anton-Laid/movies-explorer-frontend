import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ isLoading, movi, deleteMovie }) => {
  // const [shortFilms, setShortFilms] = useState(false);
  //const [searchMovies, setSearchMovies] = useState('');

  // const filme = movi.filter((m) => {
  //   if (shortFilms) {
  //     return (
  //       m.duration <= 40 &&
  //       m.nameRU.toLowerCase().includes(searchMovies.toLowerCase())
  //     );
  //   } else if (!shortFilms) {
  //     return m.nameRU.toLowerCase().includes(searchMovies.toLowerCase());
  //   }
  // });

  // const headelFilterShort = () => {
  //   setShortFilms(!shortFilms);
  // };

  return (
    <>
      <section className="movies">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList movi={movi} deleteMovie={deleteMovie} />
        )}
      </section>
    </>
  );
};

export default SavedMovies;
