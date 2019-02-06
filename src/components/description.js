import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../style/description';
import { Button, Title, Subtitle, Body, Top } from '../style/common';
import { HIDE_DESCRIPTION } from '../redux/actions/actions';
import { mapStateToProps } from '../redux/mapStateToProps';
import ReactMarkdown from 'react-markdown';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    HIDE_DESCRIPTION,
  },
    dispatch,
  ),
});
export class Description extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <Container status={this.props.description.status}>
        <Top>
          <Button
            onPointerDown={this.props.HIDE_DESCRIPTION}
            onTouchStart={this.props.HIDE_DESCRIPTION}
          >
          x
          </Button>
        </Top>
        <Title>{this.props.lookingAt.title}</Title>
        <Subtitle>{this.props.lookingAt.subtitle}</Subtitle>
        <Body>
          <ReactMarkdown source={this.props.lookingAt.description}/>
        </Body>
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
