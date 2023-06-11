import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-progect">
      <h2 className="about-progect__title">О проекте</h2>

      <div className="block-about-project">
        <h2 className="about-progect__title-deadlines title-diplom">
          Дипломный проект включал 5 этапов
        </h2>
        <p className="about-progect__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className="about-progect__title-deadlines title-dedlines-diplon">
          На выполнение диплома ушло 5 недель
        </h2>
        <p className="about-progect__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className="block-weeks">
        <div className="blokc-first-week">1 неделя</div>
        <h4 className="blokc-next-week">4 недели</h4>
        <p className="title-backend">Back-end</p>
        <p className="title-frontend">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
