import React from 'react';
import Logo from 'components/Logo/Logo';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import SideDrawerContext from 'context/SideDrawerContext';
import classes from './SideDrawer.module.css';

const SideDrawer = () => {
  const context = React.useContext(SideDrawerContext);
  let attachedClasses = [classes.SideDrawer];
  attachedClasses.push(context.show ? classes.Open : classes.Close);
  return (
    <React.Fragment>
      <Backdrop show={context.show} closed={context.toggle} />
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
