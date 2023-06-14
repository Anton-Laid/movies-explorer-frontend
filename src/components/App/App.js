import { useState } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import PopapNavigation from '../PopapNavigation/PopapNavigation';
import NotFoud from '../NotFound/NotFoud';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

function App() {
  const [openPopup, setOpenPupap] = useState(false);
  // сделал временно. чтобы можно было проверить как выглядит header при авторизации
  const [authorization, setAuthorization] = useState(true);
  const [meMovies, setMeMovies] = useState(false);
  let location = useLocation();
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const hendleClosePopup = () => {
    setOpenPupap(!openPopup);
  };

  return (
    <div className="App">
      {headerPaths.includes(location.pathname) ? (
        <Header
          setOpenPupap={setOpenPupap}
          hendleClosePopup={hendleClosePopup}
          authorization={authorization}
        />
      ) : (
        ''
      )}
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/"
          element={
            <Main
              setOpenPupap={setOpenPupap}
              hendleClosePopup={hendleClosePopup}
              authorization={authorization}
            />
          }
        />

        <Route path="/movies" element={<Movies meMovies={meMovies} />} />

        <Route path="/saved-movies" element={<SavedMovies meMovies={true} />} />

        <Route path="*" element={<NotFoud />} />
      </Routes>
      <PopapNavigation
        openPopup={openPopup}
        hendleClosePopup={hendleClosePopup}
      />
      {footerPaths.includes(location.pathname) ? <Footer /> : ''}
    </div>
  );
}

export default App;
