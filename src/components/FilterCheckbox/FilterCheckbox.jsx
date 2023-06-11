import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <section className="filter-checkbox">
      <label className="checkbox">
        <input type="checkbox" className="checkbox__input" />
        <div className="checkbox__div"></div>
        Короткометражки
      </label>
    </section>
  );
};

export default FilterCheckbox;
