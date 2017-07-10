import React from 'react';
import {Layout} from 'antd';
import AppRouter from './AppRouter';

import src from '../images/logo.png';

const {Header} = Layout;

export default () => (
  <div className="root">
    <Layout>
      <Header className="header">
        <span className="logo">
          <img src={src} alt="蚂蚁矿尺" />
        </span>
        <h3 className="title">My App</h3>
      </Header>
    </Layout>
    <AppRouter />
  </div>
);
