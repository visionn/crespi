import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  SHOW_INFO,
  HIDE_INFO,
  CHANGE_LANGUAGE,
} from '../redux/actions/actions.js';
import { Exit } from '../style/toast';
import { Container } from '../style/info';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = state => ({
  lookingAt: state.looking,
  language: state.language,
  info: state.info,
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
  constructor(props) {
    super();
  }
  render() {
    return (
      <Container info={this.props.info}>
        <Exit onClick={this.props.HIDE_INFO}>X</Exit>
        <button onClick={() => this.props.CHANGE_LANGUAGE('ita')}>Ita</button>
        <button onClick={() => this.props.CHANGE_LANGUAGE('eng')}>Eng</button>
        <div>{this.props.language}</div>
        <ReactMarkdown source={this.props.info} />
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
