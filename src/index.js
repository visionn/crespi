// use require.ensure for deployment
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { STORE } from './redux/store/store';
import Loading from './components/loading';
import App from './components/app.js';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <Provider store={STORE}>
    <Normalize />
    <Loading />
    <App />
  </Provider>,
  document.getElementById('crespi-app'),
);
