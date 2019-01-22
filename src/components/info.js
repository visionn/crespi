import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  SHOW_INFO,
  HIDE_INFO,
  CHANGE_LANGUAGE,
} from '../redux/actions/actions.js';
import { LANGUAGE } from '../redux/thunks/changeLanguage';
import { Container, Language } from '../style/info';
import { Title, Subtitle, Body, Exit, Top } from '../style/common';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = state => ({
  lookingAt: state.looking,
  language: state.language,
  info: state.info,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      SHOW_INFO,
      HIDE_INFO,
      CHANGE_LANGUAGE,
    },
    dispatch,
  ),
  lang: () => dispatch(LANGUAGE()),
});
class Info extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Container info={this.props.info}>
        <Top>
          <Exit
            onTouchStart={this.props.actions.HIDE_INFO}
            onPointerDown={this.props.actions.HIDE_INFO}
          >
            X
          </Exit>
        </Top>
        <Title>{this.props.info.title}</Title>
        <Subtitle>{this.props.info.subtitle}</Subtitle>
        <Language
          onTouchStart={this.props.lang}
          onPointerDown={this.props.lang}
        >
          {this.props.language}
        </Language>
        <Body>
          <ReactMarkdown source={this.props.info.description} />
        </Body>
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
