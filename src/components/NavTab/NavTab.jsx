import React from 'react';
import { btnData } from '../../utils/constans';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav-tab">
      {btnData.map((i) => {
        return (
          <button className="nav-tab__button" key={i.id}>
            {i.nameBtn}
          </button>
        );
      })}
    </nav>
  );
};

export default NavTab;
