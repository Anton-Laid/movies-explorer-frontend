import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = ({ hendleClosePopup, loggedIn }) => {
  return (
    <header className="header">
      {loggedIn ? (
        <>
          <Logo modifier={'header__logo'} />

          <button className="header__burger" onClick={hendleClosePopup} />

          <div className="header__main-menu">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `header__link-movies ${
                  isActive ? 'header__link-movies_active' : ''
                }`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `header__link-movies ${
                  isActive ? 'header__link-movies_active' : ''
                }`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to="/profile" className="header__profile">
            Аккаунт
          </Link>
        </>
      ) : (
        <>
          <Logo modifier={'header__logo'} />
          <div className="header__menu">
            <Link to="/signup" className="header__btn-register">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn-login">
              Войти
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
