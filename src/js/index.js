// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DOM from './dom';
import {Provider} from 'react-redux';
import {STORE} from '../redux/store/store';

class App extends Component {
  render() {
    return (
      <div>
        <DOM />
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
