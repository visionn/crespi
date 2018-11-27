// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Scene from './Scene';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Scene initialStatus={false} initialState={'welcome'} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('crespi-app')
);
