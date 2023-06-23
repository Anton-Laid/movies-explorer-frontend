import React from 'react';
import '../Portfolio/Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title-portfolio">Портфолио</h2>
      <div className="portfolio__container-links">
        <a
          className="portfolio__link-project"
          target="blak"
          href="https://antonliad.github.io/Iearn-to-learn/"
        >
          Статичный сайт
          <img alt="arrow" src={arrow} className="portfolio__arrow" />
        </a>

        <a
          className="portfolio__link-project"
          target="blak"
          href="https://antonliad.github.io/TREVER-Russian/"
        >
          Адаптивный сайт
          <img alt="arrow" src={arrow} className="portfolio__arrow" />
        </a>
        <a
          className="portfolio__link-project portfolio__link-project_border-not"
          target="blak"
          href="https://github.com/AntonLiad/react-mesto-auth"
        >
          Одностраничное приложение
          <img alt="arrow" src={arrow} className="portfolio__arrow" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
