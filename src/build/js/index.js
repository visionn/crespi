// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Scene from './Scene';

class App extends Component {
  render() {
    return (
      <div>
        <Scene />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('crespi-app')
);
