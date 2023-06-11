import React, { useState } from "react";
import "./MoviesCard.css";
import meMovie from "../../images/savemovie.svg";
import deleteMovies from "../../images/deletemovies.svg";
import saveMovie from "../../images/btnsavemovies.svg";
import { getCalculatingTimeMoveie } from "../../utils/convertMinutes";

const MoviesCard = ({ title, time, img, meMovies, isLiked }) => {
  return (
    <section className="movies-card">
      <button className="movies-card__btn" type="submit">
        {meMovies ? (
          <img alt="кнопка карточки" src={deleteMovies} />
        ) : (
          <img alt="кнопка карточки" src={isLiked ? saveMovie : meMovie} />
        )}
      </button>
      <h2 className="movies-card__title">{title}</h2>
      <p className="movies-card__time">{getCalculatingTimeMoveie(time)}</p>
      <img alt="обложка фильма" src={img} className="movies-card__img" />
    </section>
  );
};

export default MoviesCard;
