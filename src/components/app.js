import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scene from './scene';
import Toast from './toast';
import Description from './description';
import { mapStateToProps } from '../redux/mapStateToProps';
import { Root } from '../style/common';
import LazyLoad from 'react-lazyload';
class App extends Component {
  render() {
    return (
      <Root>
        <Description />
        <Toast />
        <LazyLoad height={200} once>
          <Scene />
        </LazyLoad>
      </Root>
    );
  }
}
export default connect(mapStateToProps)(App);
