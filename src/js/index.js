// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dom from './dom';

class App extends Component {
  render() {
    return (
      <div>
        <Dom />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('crespi-app')
);
