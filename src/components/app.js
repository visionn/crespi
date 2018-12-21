import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dom from './dom';
import Info from './info';

const mapStateToProps = state => ({
  info: state.info
});
class App extends Component {
  render() {
    return(
      <div>
        {this.props.info ? <Info /> : <Dom />}
      </div>
    )
  }
}
export default connect(mapStateToProps)(App);
