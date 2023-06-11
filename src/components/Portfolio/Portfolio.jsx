import React from "react";
import "../Portfolio/Portfolio.css";
import { dataPortfolio } from "../../utils/constans";
import arrow from "../../images/arrow.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Студент</h2>

      <div className="portfolio__block-about-me">
        <div className="portfolio__avatar" />
        <h2 className="portfolio__name">Антон</h2>
        <p className="portfolio__profession">Фронтенд-разработчик, 24 года.</p>
        <p className="portfolio__about-me">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          href="https://github.com/AntonLiad"
          className="portfolio__github"
          target="_blak"
        >
          Github
        </a>
      </div>

      <h2 className="portfolio__portfolio">Портфолио</h2>
      <a
        className="portfolio__project"
        target="_blak"
        href="https://antonliad.github.io/Iearn-to-learn/"
      >
        Статичный сайт{" "}
        <img alt="arrow" src={arrow} className="portfolio__arrow" />
      </a>

      <a
        className="portfolio__project"
        target="_blak"
        href="https://antonliad.github.io/TREVER-Russian/"
      >
        Адаптивный сайт
        <img alt="arrow" src={arrow} className="portfolio__arrow" />
      </a>
      <a
        className="portfolio__project portfolio__project-border-not"
        target="_blak"
        href="https://github.com/AntonLiad/react-mesto-auth"
      >
        Одностраничное приложение
        <img alt="arrow" src={arrow} className="portfolio__arrow" />
      </a>
    </div>
  );
};

export default Portfolio;
