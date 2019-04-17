import React from 'react';
import SideDrawerContext from 'context/SideDrawerContext';
import classes from './Backdrop.module.css';

const Backdrop = () => {
  const context = React.useContext(SideDrawerContext);
  return context.show ? (
    <div className={classes.Backdrop} onClick={context.toggle} />
  ) : null;
};

export default Backdrop;
