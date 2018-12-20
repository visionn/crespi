// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dom from './dom';
import Info from './info';
import {Provider} from 'react-redux';
import {STORE} from '../redux/store/store';

class App extends Component {
  render() {
    return (
      <div>
        <Dom />
        <Info />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('crespi-app')
);
