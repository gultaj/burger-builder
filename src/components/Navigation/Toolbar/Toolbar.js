import React from 'react';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import Logo from 'components/Logo/Logo';
import ToggleDrawer from 'components/Navigation/SideDrawer/ToggleDrawer/ToggleDrawer';
import classes from './Toolbar.module.css';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <ToggleDrawer />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.Toolbar_Nav}>
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default Toolbar;
