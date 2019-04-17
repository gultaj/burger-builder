import React from 'react';

const SideDrawerContext = React.createContext({
  show: false,
  toggle: () => {}
});

export default SideDrawerContext;
