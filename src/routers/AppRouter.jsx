import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import * as components from '../components/';
import routes from './sideRoutes';
import '../style/App.less';
import '../style/index.less';

const AppRouter = () => (
  <Router>
    <Route
      render={({location}) => (
        <div className="container">
          <div className="sideBar">
            <ul>
              {
                routes.map(item => (
                  <li key={item.sideBar}>
                    <NavLink
                      exact
                      to={item.path}
                      activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                      }}
                      >{item.sideBar}</NavLink></li>
                ))
              }
            </ul>
          </div>

          <div className="viewCon">
            <div key={location.pathname}>
              {
                routes.map(item => (
                  <Route location={location} key={item.component} exact={item.exact} path={item.path} component={components[item.component]} />
                ))
              }
            </div>
          </div>
        </div>
      )}
      />
  </Router>
);

export default AppRouter;
