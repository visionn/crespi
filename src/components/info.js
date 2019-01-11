import React, { Component } from 'react';
import { Exit, Description, Top, Container, Box, Title, Subtitle } from '../style/info';
import { connect } from 'react-redux';
import { HIDE_INFO, LOOKING_AT } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { sphereData } from '../configuration/config.js';

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
class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Top>
          <Exit onClick={this.props.HIDE_INFO}>X</Exit>
        </Top>
        <Description lookingAt={this.props.lookingAt}>
          <Title>{this.props.lookingAt}</Title>
          <Subtitle>{this.props.lookingAt}</Subtitle>
          <div>{sphereData[0].text[0].description}</div>
        </Description>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
