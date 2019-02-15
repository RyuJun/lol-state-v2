import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'styles/base.scss';

import modules from 'modules';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import { createLogger } from 'redux-logger';
import penderMiddleware from 'redux-pender';

// const logger = createLogger();
const store = createStore(modules, applyMiddleware(penderMiddleware()));
// const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
