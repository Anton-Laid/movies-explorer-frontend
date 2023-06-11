import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <h2 className="footer__title-ynadex">Яндекс.Практикум</h2>
      <a
        href="https://github.com/yandex-praktikum"
        target="_blak"
        className="footer__github"
      >
        Github
      </a>
      <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
