import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './script/Main';
import './common/pace';
import './common/pace.css';

injectTapEventPlugin();
const Render = (Component) => {
  render(
    <AppContainer>
      <MuiThemeProvider>
        <Component />
      </MuiThemeProvider>
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
