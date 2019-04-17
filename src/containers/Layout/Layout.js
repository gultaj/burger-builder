import React from 'react';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';
import SideDrawerContext from 'context/SideDrawerContext';
import classes from './Layout.module.css';

const Layout = props => {
  const [showSideDrawer, setVisibilitySideDrawer] = React.useState(false);
  const toggle = () => {
    setVisibilitySideDrawer(!showSideDrawer);
  };
  return (
    <React.Fragment>
      <SideDrawerContext.Provider value={{ show: showSideDrawer, toggle }}>
        <Toolbar />
        <SideDrawer />
      </SideDrawerContext.Provider>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
