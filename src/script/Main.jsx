import React from 'react';
import AppBar from 'material-ui/AppBar';
import AppRouter from './AppRouter';

export default () => (
  <div className="root">
    <AppBar
      title="Movies"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    <AppRouter />
  </div>
);
