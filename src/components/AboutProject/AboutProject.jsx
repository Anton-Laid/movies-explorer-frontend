import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-progect">
      <h3 className="about-progect__title">О проекте</h3>

      <div className="about-progect__container">
        <div className="about-progect__description">
          <p className="about-progect__description-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-progect__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="about-progect__description">
          <p className="about-progect__description-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-progect__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-progect__term">
        <div className="about-progect__term-week about-progect__term-one">
          1 неделя
        </div>
        <div className="about-progect__term-week about-progect__term-two">
          4 недели
        </div>
      </div>

      <div className="about-progect__tech">
        <div className="about-progect__tech-week about-progect__tech-backend">
          Back-end
        </div>
        <div className="about-progect__tech-week about-progect__tech-frontend">
          Front-end
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
