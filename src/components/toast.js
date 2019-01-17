import React, { Component } from 'react';
import {
  Exit,
  Description,
  Top,
  Container,
  Box,
  Title,
  Subtitle,
} from '../style/toast';
import { connect } from 'react-redux';
import { HIDE_INFO, LOOKING_AT } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = state => ({
  info: state.info,
  lookingAt: state.looking,
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      HIDE_INFO,
    },
    dispatch,
  ),
});
class Toast extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Description lookingAt={this.props.lookingAt}>
          <Top>
            <Exit onClick={this.props.HIDE_INFO}>X</Exit>
          </Top>
          <Title>{this.props.lookingAt.title}</Title>
          <Subtitle>{this.props.lookingAt.subtitle}</Subtitle>
          <ReactMarkdown source={this.props.lookingAt.description} />
        </Description>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
