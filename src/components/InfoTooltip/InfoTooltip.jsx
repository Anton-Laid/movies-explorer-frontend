import React from 'react';
import Popap from '../Popap/Popap';
import './InfoTooltip.css';

const InfoTooltip = ({ openPopup, hendleClosePopup, message }) => {
  return (
    <Popap
      openPopup={openPopup}
      hendleClosePopup={hendleClosePopup}
      children={
        <div className="info-tooltip">
          <button
            className="info-tooltip__btn-close"
            onClick={hendleClosePopup}
          />
          <div className="info-tooltip__img">
            {message.imgPath ? '😍' : '😔'}
          </div>
          <h4 className="info-tooltip__title">{message.text}</h4>
        </div>
      }
    />
  );
};

export default InfoTooltip;
