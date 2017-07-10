import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import * as components from '../components/';
import routes from '../routes/sideRoutes';

const {Content, Sider} = Layout;

const AppRouter = () => (
  <Router>
    <Route
      render={({location}) => (
        <Layout className="container-router">
          <Sider width={200} style={{background: '#fff'}}>
            <Menu mode="inline" style={{height: '100%'}}>
              {routes.map(item => (
                <Menu.Item key={item.sideBar}>
                  <NavLink
                    exact
                    to={item.path}
                    activeStyle={{
                      color: '#108ee9'
                    }}
                    ><Icon type={item.icon} />{item.sideBar}</NavLink>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{padding: 24, margin: 0, minHeight: 280}} key={location.pathname}>
              {
                routes.map(item => (
                  <Route location={location} key={item.component} exact={item.exact} path={item.path} component={components[item.component]} />
                ))
              }
            </Content>
          </Layout>
        </Layout>
      )}
      />
  </Router>
);

export default AppRouter;
