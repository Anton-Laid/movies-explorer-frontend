import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoud.css';

const NotFoud = ({ loggedIn }) => {
  const navigate = useNavigate();

  const goBack = () => {
    loggedIn ? navigate(-2) : navigate(-1);
  };

  return (
    <section className="page-not-found">
      <h2 className="page-not-found__code">404</h2>
      <p className="page-not-found__title">Страница не найдена</p>
      <button className="page-not-found__button" onClick={goBack}>
        Назад
      </button>
    </section>
  );
};

export default NotFoud;
