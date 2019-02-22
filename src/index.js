import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'styles/base.scss';
import { composeWithDevTools } from 'redux-devtools-extension';
import modules from 'modules';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
import penderMiddleware from 'redux-pender';

const middleWare = applyMiddleware(
  penderMiddleware(),
  // createLogger()
);

const store = createStore(modules, composeWithDevTools(middleWare));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
