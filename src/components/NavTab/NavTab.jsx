import React from 'react';
import { btnData } from '../../utils/constans';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav-tab">
      {btnData.map((i) => {
        return (
          <a className="nav-tab__button" key={i.id} href={i.href}>
            {i.nameBtn}
          </a>
        );
      })}
    </nav>
  );
};

export default NavTab;
