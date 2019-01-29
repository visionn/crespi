import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from './scene';
import Toast from './toast';
import Info from './info';
import Description from './description';
import { Root } from '../style/common';

const mapStateToProps = state => ({
  info: state.info,
  lookingAt: state.looking,
});
class App extends Component {
  render() {
    return (
      <Root>
        <Toast />
        <Description />
        <Info />
        <Scene />
      </Root>
    );
  }
}
export default connect(mapStateToProps)(App);
