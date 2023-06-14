import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__avatar" />
        <h2 className="about-me__name">Антон</h2>
        <p className="about-me__profession">Фронтенд-разработчик, 24 года.</p>
        <p className="about-me__about">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className="about-me__link-github"
          href="https://github.com/AntonLiad"
          target="blak"
        >
          Github
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
