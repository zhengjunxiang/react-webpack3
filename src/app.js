import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'mobx-react';
import store from './AppStore';
import Main from './script/Main';

import './style/index.less';

injectTapEventPlugin();
const Render = (Component) => {
  render(
    <AppContainer>
        <Provider {...store}>
          <Component />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

Render(Main);
// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./script/Main', () => {
    Render(Main);
  });
}
