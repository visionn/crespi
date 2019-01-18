import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SHOW_INFO, HIDE_INFO } from '../redux/actions/actions.js';
import { Container } from '../style/info';

const mapStateToProps = state => ({
  lookingAt: state.looking,
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      SHOW_INFO,
      HIDE_INFO,
    },
    dispatch,
  ),
});
class Info extends Component {
  constructor (props) {
    super();
  }
  render () {
    return (
      <Container>
        <div>{this.props.lookingAt.language}</div>
        <div>defending1</div>
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(Info);
