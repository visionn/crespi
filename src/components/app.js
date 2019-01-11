import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dom from './dom';
import Info from './info';

const mapStateToProps = state => ({
  info: state.info,
  lookingAt: state.looking,
});
class App extends Component {
  render() {
    return (
      <div>
        <Info />
        <Dom />
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
