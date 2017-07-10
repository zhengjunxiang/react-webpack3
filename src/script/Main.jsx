import React from 'react';
import AppBar from 'material-ui/AppBar';
import AppRouter from './AppRouter';

// import Loadable from 'react-loadable';
// import LoadingComponent from '../components/LoadingComponent';

// const AppRouter = Loadable({
//   loader: () => import('./AppRouter'),
//   LoadingComponent,
//   delay: 300
// });

export default () => (
  <div className="root">
    <AppBar
      title="Movies"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    <AppRouter />
  </div>
);
