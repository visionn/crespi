import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from './scene';
import Toast from './toast';
import Description from './description';
import { mapStateToProps } from '../redux/mapStateToProps';
import { Root } from '../style/common';
class App extends Component {
  render() {
    return (
      <Root>
        <Description />
        <Toast />
        <Scene />
      </Root>
    );
  }
}
export default connect(mapStateToProps)(App);
