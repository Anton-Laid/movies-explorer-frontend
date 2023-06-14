import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__conteiner">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <p className="footer__ynadex">Яндекс.Практикум</p>
        <a
          href="https://github.com/yandex-praktikum"
          target="blak"
          className="footer__github"
        >
          Github
        </a>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
