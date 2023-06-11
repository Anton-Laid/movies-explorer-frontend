import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import { NavLink } from "react-router-dom";

const Header = ({ hendleClosePopup, authorization }) => {
  return (
    <header className="header">
      {authorization ? (
        <>
          <Logo />

          <button className="burger" onClick={hendleClosePopup} />

          <menu className="main-menu">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `button-movies ${isActive ? "button-movies-active" : ""}`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `button-movies ${isActive ? "button-movies-active" : ""}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </menu>
          <Links
            path={"/profile"}
            classStyle={"button-profile"}
            title={"Аккаунт"}
          />
        </>
      ) : (
        <>
          <Logo />
          <menu className="menu">
            <Links
              path={"/signup"}
              classStyle={"button-register"}
              title={"Регистрация"}
            />
            <Links
              path={"/signin"}
              classStyle={"button-login"}
              title={"Войти"}
            />
          </menu>
        </>
      )}
    </header>
  );
};

export default Header;
