import React from 'react';
import classes from './ToggleDrawer.module.css';

const ToggleDrawer = props => (
  <div className={classes.ToggleDrawer} onClick={props.clicked}>
    <div className={classes.Line} />
    <div className={classes.Line} />
    <div className={classes.Line} />
  </div>
);

export default ToggleDrawer;
