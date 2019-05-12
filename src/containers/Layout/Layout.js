import React from 'react';
import Toolbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';
import SideDrawerContext from 'context/SideDrawerContext';
import classes from './Layout.module.css';
import { connect } from 'react-redux';

const Layout = props => {
  const [showSideDrawer, setVisibilitySideDrawer] = React.useState(false);
  const toggle = () => {
    setVisibilitySideDrawer(!showSideDrawer);
  };
  return (
    <React.Fragment>
      <SideDrawerContext.Provider value={{ show: showSideDrawer, toggle }}>
        <Toolbar isAuth={props.isAuth} />
        <SideDrawer isAuth={props.isAuth} />
      </SideDrawerContext.Provider>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.token !== null
});

export default connect(mapStateToProps)(Layout);
