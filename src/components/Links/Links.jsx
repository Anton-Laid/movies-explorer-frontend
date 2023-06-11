import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Links = ({ path, classStyle, title, onClick }) => {
  return (
    <Link to={path} className={classStyle} onClick={() => onClick()}>
      {title}
    </Link>
  );
};

export default Links;
