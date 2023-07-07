import React from 'react';
import './Popap.css';
import closePopup from '../../contexts/utilis';

const Popap = ({ openPopup, hendleClosePopup, children }) => {
  return (
    <div
      className={`popup ${openPopup ? 'popup_opened' : ''}`}
      onClick={(e) => closePopup(e, hendleClosePopup)}
    >
      {children}
    </div>
  );
};

export default Popap;
