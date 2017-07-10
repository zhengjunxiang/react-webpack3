import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import * as components from '../components/';
import routes from '../routes/sideRoutes';

const {Content, Sider} = Layout;

class AppRouter extends Component {
  renderMenu() {
    return (<Menu mode="inline" style={{height: '100%'}}>
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
    </Menu>);
  }
  renderView(location) {
    return (
      <div>
        {routes.map(route => (
          <Route
            exact={route.exact}
            key={route.component}
            location={location}
            path={route.path}
            component={components[route.component]}
            />
        ))}
      </div>
    );
  }
  render() {
    return (
      <Router>
        <Route
          render={({location}) => (
            <Layout className="container-router">
              <Sider width={200} style={{background: '#fff'}}>
                {this.renderMenu()}
              </Sider>
              <Layout>
                <Content style={{padding: 24, margin: 0, minHeight: 280}} key={location.pathname}>
                  {this.renderView(location)}
                </Content>
              </Layout>
            </Layout>
          )}
          />
      </Router>
    );
  }
}

export default AppRouter;
