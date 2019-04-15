import React from 'react';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = props => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
