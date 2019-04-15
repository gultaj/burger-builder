import React from 'react';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import Logo from 'components/Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav className={classes.Toolbar_Nav}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
