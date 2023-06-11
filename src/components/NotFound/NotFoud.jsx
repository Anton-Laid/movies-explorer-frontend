import React from "react";
import { Link } from "react-router-dom";
import "./NotFoud.css";

const NotFoud = () => {
  return (
    <div className="page-notfound">
      <h2 className="page-notfound__code">404</h2>
      <p className="page-notfound__title">Страница не найдена</p>
      <Link to={"/"} className="page-notfound__button">
        Назад
      </Link>
    </div>
  );
};

export default NotFoud;
