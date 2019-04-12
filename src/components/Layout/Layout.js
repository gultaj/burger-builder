import React from 'react';
import classes from './Layout.module.css';

const Layout = (props) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, Backdor</div>
        <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
);

export default Layout;
