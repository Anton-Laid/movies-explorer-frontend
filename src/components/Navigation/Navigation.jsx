import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

import Popap from '../Popap/Popap';

const NavigationPopup = ({ hendleClosePopup, openPopup }) => {
  return (
    <Popap
      openPopup={openPopup}
      hendleClosePopup={hendleClosePopup}
      children={
        <div className={`navigation ${openPopup ? 'navigation-active' : ''}`}>
          <button
            className="navigation__btn-close"
            onClick={hendleClosePopup}
          />
          <div className="navigation__link-text">
            <Link
              className="navigation__name-link"
              to={'/'}
              onClick={hendleClosePopup}
            >
              Главная
            </Link>
            <Link
              className="navigation__name-link"
              to={'/movies'}
              onClick={hendleClosePopup}
            >
              Фильмы
            </Link>
            <Link
              className="navigation__name-link"
              to={'/saved-movies'}
              onClick={hendleClosePopup}
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            className="navigation__btn-account"
            to={'/profile'}
            onClick={hendleClosePopup}
          >
            Аккаунт
          </Link>
        </div>
      }
    />
  );
};

export default NavigationPopup;
