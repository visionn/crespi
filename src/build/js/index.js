// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Scene from './Scene';

class App extends Component {
  constructor() {
    super();

    this.sceneButton = {
      name: 'null'
    }
  }
  render() {
    return (
      <div>
        <button >{this.sceneButton.name}</button>
        <Scene sceneButton />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('crespi-app')
);
