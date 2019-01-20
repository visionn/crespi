import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from './scene';
import Toast from './toast';
import Info from './info'

const mapStateToProps = state => ({
  info: state.info,
  lookingAt: state.looking,
});
class App extends Component {
  render() {
    return (
      <div>
        <Toast />
        <Info />
        <Scene />
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
