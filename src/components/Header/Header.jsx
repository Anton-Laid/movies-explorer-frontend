import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import { NavLink } from 'react-router-dom';

const Header = ({ hendleClosePopup, authorization }) => {
  return (
    <header className="header">
      {authorization ? (
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
          <Links
            path={'/profile'}
            classStyle={'header__profile'}
            title={'Аккаунт'}
          />
        </>
      ) : (
        <>
          <Logo modifier={'header__logo'} />
          <div className="header__menu">
            <Links
              path={'/signup'}
              classStyle={'header__btn-register'}
              title={'Регистрация'}
            />
            <Links
              path={'/signin'}
              classStyle={'header__btn-login'}
              title={'Войти'}
            />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
