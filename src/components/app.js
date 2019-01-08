import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dom from './dom';
import Info from './info';

const mapStateToProps = state => ({
  info: state.info,
});
class App extends Component {
  render() {
    return (
      <div>
       <Dom />
       {this.props.info ? <Info /> : null}
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
