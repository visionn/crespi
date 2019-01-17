import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from './';
import Toast from './toast';

const mapStateToProps = state => ({
  info: state.info,
  lookingAt: state.looking,
});
class App extends Component {
  render() {
    return (
      <div>
        <Toast />
        <Scene />
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
