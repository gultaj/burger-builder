import React from 'react';
import SideDrawerContext from 'context/SideDrawerContext';
import classes from './ToggleDrawer.module.css';

const ToggleDrawer = () => {
  const context = React.useContext(SideDrawerContext);
  return (
    <div className={classes.ToggleDrawer} onClick={context.toggle}>
      <div className={classes.Line} />
      <div className={classes.Line} />
      <div className={classes.Line} />
    </div>
  );
};

export default ToggleDrawer;
