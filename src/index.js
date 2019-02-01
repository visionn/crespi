// use require.ensure for deployment
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { STORE } from './redux/store/store';
import App from './components/app.js';

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('crespi-app'),
);
