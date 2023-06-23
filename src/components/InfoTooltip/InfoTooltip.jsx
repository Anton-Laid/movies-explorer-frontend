import React from 'react';
import Popap from '../Popap/Popap';
import './InfoTooltip.css';
import unionTrue from '../../images/true.png';
import unionFalse from '../../images/false.png';

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
          <img
            className="info-tooltip__img"
            alt="фото"
            src={message.imgPath ? unionTrue : unionFalse}
          />
          <h4 className="info-tooltip__title">{message.text}</h4>
        </div>
      }
    />
  );
};

export default InfoTooltip;
