import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SHOW_INFO, HIDE_INFO, CHANGE_LANGUAGE } from '../redux/actions/actions.js';
import { Container } from '../style/info';

const mapStateToProps = state => ({
  lookingAt: state.looking,
  language: state.language,
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      SHOW_INFO,
      HIDE_INFO,
      CHANGE_LANGUAGE,
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
        <button onClick={() => this.props.CHANGE_LANGUAGE('ita')}>Ita</button>
        <button onClick={() => this.props.CHANGE_LANGUAGE('eng')}>Eng</button>
        <div>{this.props.language}</div>
        <div>defending1</div>
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(Info);
