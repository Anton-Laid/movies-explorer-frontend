import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoud.css';

const NotFoud = () => {
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__code">404</h2>
      <p className="page-not-found__title">Страница не найдена</p>
      <Link to={'/'} className="page-not-found__button">
        Назад
      </Link>
    </section>
  );
};

export default NotFoud;
