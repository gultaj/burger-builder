import React from 'react';
import Logo from 'components/Logo/Logo';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer];
  attachedClasses.push(props.showSideDrawer ? classes.Open : classes.Close);
  return (
    <React.Fragment>
      <Backdrop show={props.showSideDrawer} closed={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
