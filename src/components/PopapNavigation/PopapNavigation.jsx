import React from 'react';
import './PopapNavigation.css';
import Navigation from '../Navigation/Navigation';
import closePopup from '../../contexts/utilis';

const PopapNavigation = ({ openPopup, hendleClosePopup }) => {
  return (
    <div
      className={`popup ${openPopup ? 'popup_opened' : ''}`}
      onClick={(e) => closePopup(e, hendleClosePopup)}
    >
      <Navigation hendleClosePopup={hendleClosePopup} openPopup={openPopup} />
    </div>
  );
};

export default PopapNavigation;
