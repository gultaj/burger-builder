import React, { useState } from 'react';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = props => {
  const [showSideDrawer, setVisibilitySideDrawer] = useState(false);
  return (
    <React.Fragment>
      <Toolbar toggleDrawer={() => setVisibilitySideDrawer(!showSideDrawer)} />
      <SideDrawer
        showSideDrawer={showSideDrawer}
        closed={() => setVisibilitySideDrawer(false)}
      />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
