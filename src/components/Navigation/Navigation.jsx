import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { dataNavigeterLink } from "../../utils/constans";
import Links from "../Links/Links";

const Navigation = ({ hendleClosePopup, openPopup }) => {
  return (
    <div className={`navigation ${openPopup ? "navigation-active" : ""}`}>
      <button className="btn-close" onClick={hendleClosePopup} />
      <div className="link-text">
        {dataNavigeterLink.map((i) => {
          return (
            <Links
              key={i.id}
              path={i.link}
              classStyle={i.class}
              title={i.title}
              hendleClosePopup={hendleClosePopup}
            ></Links>
          );
        })}
      </div>
      <Link
        className="btn-account"
        to={"/profile"}
        onClick={() => hendleClosePopup()}
      >
        Аккаунт
      </Link>
    </div>
  );
};

export default Navigation;
