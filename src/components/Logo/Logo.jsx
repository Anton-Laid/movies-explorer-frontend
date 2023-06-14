import React from 'react';
import logo from '../../images/logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = ({ modifier }) => {
  return (
    <Link to="/">
      <img src={logo} className={`logo ${modifier}`} alt="logo" />
    </Link>
  );
};

export default Logo;
