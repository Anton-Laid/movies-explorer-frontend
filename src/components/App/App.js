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
import { Route, Routes, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  // хуки
  let location = useLocation();
  //навигация
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];
  // пользователь
  const [userData, setUserData] = useState({ name: '', email: '', id: '' });
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
  const [updateMovies, setUpdateMovies] = useState(true);

  const hendleClosePopup = () => {
    setOpenPupap(!openPopup);
  };

  const heandelClosePopup = () => {
    setPopapInfoTooltip(!popapInfoTooltip);
  };

  const hendelUpdateMovies = () => {
    setUpdateMovies(!updateMovies);
  };

  ///////////////////////////////
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreCards, setMoreCards] = useState(0);
  //////////////////////////////////

  //GET User
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth
        .getContent()
        .then((res) => {
          setUserData({ name: res.name, email: res.email, id: res.id });
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    loggedIn &&
      moviesApi.getSaveMovies().then((movies) => {
        localStorage.setItem('savedMovies', JSON.stringify(movies));
        setMySaveMovi(movies);
        setIsLoading(false);
      });

    updateMovies &&
      moviesApi.getSaveMovies().then((movies) => {
        localStorage.setItem('savedMovies', JSON.stringify(movies));
        setMySaveMovi(movies);
        setIsLoading(false);
      });
  }, [loggedIn, updateMovies]);

  useEffect(() => {
    loggedIn &&
      moviesApi.getMovies().then((movies) => {
        console.log(windowWidth);
        if (windowWidth <= 450) {
          setDataMovies(movies.slice(0, 5));
          console.log(dataMovies);
          setMoreCards(2);
          setIsLoading(false);
        } else if (windowWidth <= 850) {
          setDataMovies(movies.slice(0, 8));
          setMoreCards(2);
          setIsLoading(false);
        } else if (windowWidth >= 1000) {
          setDataMovies(movies.slice(0, 12));
          setMoreCards(3);
          setIsLoading(false);
        }
      });

    updateMovies &&
      moviesApi.getMovies().then((movies) => {
        console.log(windowWidth);
        if (windowWidth <= 450) {
          setDataMovies(movies.slice(0, 5));
          console.log(dataMovies);
          setMoreCards(2);
          setIsLoading(false);
        } else if (windowWidth <= 850) {
          setDataMovies(movies.slice(0, 8));
          setMoreCards(2);
          setIsLoading(false);
        } else if (windowWidth >= 1000) {
          setDataMovies(movies.slice(0, 12));
          setMoreCards(3);
          setIsLoading(false);
        }
      });
  }, [loggedIn, updateMovies]);

  const handleAddMovies = (movie, isLiked, id) => {
    isLiked ? handleDeleteMovie(id) : handleSaveMovies(movie);
  };

  //  POST films
  const handleSaveMovies = (movie) => {
    moviesApi
      .createMovi(movie)
      .then((res) => {
        hendelUpdateMovies();
      })
      .catch((err) => console.log(err));
  };

  // DELETE films
  const handleDeleteMovie = (id) => {
    moviesApi
      .deleteMovies(id)
      .then((res) => {
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
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                setLoggedIn={setLoggedIn}
                nameUser={userData}
                setPopapInfoTooltip={setPopapInfoTooltip}
                setMessage={setMessage}
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
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                isLoading={isLoading}
                element={Movies}
                movi={dataMovies}
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
