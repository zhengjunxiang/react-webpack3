import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppRouter from './routers/AppRouter';

const Render = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

Render(AppRouter);
// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./routers/AppRouter', () => {
    Render(AppRouter);
  });
}
