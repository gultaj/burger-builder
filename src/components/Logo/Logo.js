import React from 'react';
import logoImage from 'assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = props => (
  <div className={classes.Logo}>
    <img src={logoImage} alt="My Burger" />
  </div>
);

export default Logo;
