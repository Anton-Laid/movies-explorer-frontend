import React from "react";
import "./Techs.css";
import { dataTechnologie } from "../../utils/constans";

const Techs = () => {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h2 className="techs__title-technogogies">7 технологий</h2>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="block-technologies">
        {dataTechnologie.map((i) => {
          return (
            <div className="technologie" key={i.id}>
              {i.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Techs;
