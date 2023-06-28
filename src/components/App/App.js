import Main from '../Main/Main';
import Header from '../Header/Header';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NotFoud from '../NotFound/NotFoud';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import NavigationPopup from '../Navigation/Navigation';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/Auth';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  // хуки
  let location = useLocation();
  let navigate = useNavigate();
  //навигация
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];
  // пользователь
  const [userData, setUserData] = useState({});
  console.log(userData);
  const [loggedIn, setLoggedIn] = useState(false);
  // попап
  const [popapInfoTooltip, setPopapInfoTooltip] = useState(false);
  const [openPopup, setOpenPupap] = useState(false);
  // инфо попапа
  const [message, setMessage] = useState({
    imgPath: '',
    text: '',
  });
  // данные фильмов
  const [dataMovies, setDataMovies] = useState([]);
  const [mySaveMovi, setMySaveMovi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreCards, setMoreCards] = useState(0);

  useEffect(() => {
    auth
      .getContent()
      .then((res) => {
        setUserData(res);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    reFetch();
  }, [loggedIn]);

  const hendleClosePopup = () => {
    setOpenPupap(!openPopup);
  };

  const heandelClosePopup = () => {
    setPopapInfoTooltip(!popapInfoTooltip);
  };

  const hendelUpdateMovies = () => {
    reFetch();
  };

  const searchMovie = (movieName, isShortFilms) => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        const searchedMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(movieName.toLowerCase())
        );
        const foundMovies = isShortFilms
          ? searchedMovies.filter((item) => item.duration <= 40)
          : searchedMovies;
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
        localStorage.setItem('searchMovieName', movieName);
        localStorage.setItem('shortFilms', isShortFilms);
        setIsLoading(false);
        handleResize();
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  const checkWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleResize = () => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if (foundMovies === null) {
      return;
    }
    if (windowWidth >= 950) {
      setDataMovies(foundMovies.slice(0, 12));
      setMoreCards(3);
    } else if (windowWidth > 650 && windowWidth < 1280) {
      setDataMovies(foundMovies.slice(0, 8));
      setMoreCards(2);
    } else if (windowWidth <= 450) {
      setDataMovies(foundMovies.slice(0, 5));
      setMoreCards(2);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);
    handleResize();
  }, []);

  const handleShowMore = () => {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    setDataMovies(foundMovies.slice(0, dataMovies.length + moreCards));
  };

  const handleSearch = (movieName, isShortFilms) => {
    searchMovie(movieName, isShortFilms);
  };

  const reFetch = () => {
    loggedIn && getMySaveMovies();
  };

  const getMySaveMovies = () => {
    return moviesApi.getSaveMovies().then((movies) => {
      localStorage.setItem('savedMovies', JSON.stringify(movies));
      setMySaveMovi(movies);
      setIsLoading(false);
    });
  };

  const handleMoviesSave = (movies) => {
    moviesApi
      .createMovi(movies)
      .then((m) => {
        setDataMovies([...dataMovies, m]);
      })
      .catch((err) => console.log(err));
  };

  const handleAddMovies = (movie, isLiked, id) => {
    isLiked ? handleDeleteMovie(id) : handleSaveMovies(movie);
  };

  const handleSaveMovies = (movie) => {
    moviesApi
      .createMovi(movie)
      .then(() => {
        hendelUpdateMovies();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (id) => {
    moviesApi
      .deleteMovies(id)
      .then(() => {
        hendelUpdateMovies();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={userData}>
      <>
        {headerPaths.includes(location.pathname) ? (
          <Header
            setOpenPupap={setOpenPupap}
            hendleClosePopup={hendleClosePopup}
            loggedIn={loggedIn}
          />
        ) : (
          ''
        )}
        <Routes>
          <Route
            path="/signup"
            element={
              <Register
                setPopapInfoTooltip={setPopapInfoTooltip}
                setMessage={setMessage}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                setPopapInfoTooltip={setPopapInfoTooltip}
                setMessage={setMessage}
                setLoggedIn={setLoggedIn}
                setUserData={setUserData}
              />
            }
          />

          <Route
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                setOpenPupap={setOpenPupap}
                hendleClosePopup={hendleClosePopup}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                nameUser={userData}
                setPopapInfoTooltip={setPopapInfoTooltip}
                setMessage={setMessage}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                handleSearch={handleSearch}
                defaultValue={localStorage.getItem('searchMovieName') || ''}
                movi={dataMovies}
                handleShowMore={handleShowMore}
                handleMoviesSave={handleMoviesSave}
                isLoading={isLoading}
                addMovies={handleAddMovies}
                deleteMovie={handleDeleteMovie}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                isLoading={isLoading}
                element={SavedMovies}
                movi={mySaveMovi}
                deleteMovie={handleDeleteMovie}
              />
            }
          />

          <Route path="*" element={<NotFoud />} />
        </Routes>
        <NavigationPopup
          openPopup={openPopup}
          hendleClosePopup={hendleClosePopup}
        />
        <InfoTooltip
          message={message}
          openPopup={popapInfoTooltip}
          hendleClosePopup={heandelClosePopup}
        />
        {footerPaths.includes(location.pathname) ? <Footer /> : ''}
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
