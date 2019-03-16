import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../style/description';
import { Button, Title, Subtitle, Body, Top } from '../style/common';
import { HIDE_DESCRIPTION } from '../redux/actions/actions';
import { mapStateToProps } from '../redux/mapStateToProps';
import ReactMarkdown from 'react-markdown';
import { DinamicPage } from './dinamic';
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      HIDE_DESCRIPTION,
    },
    dispatch,
  ),
});
export class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
        <DinamicPage
          name={this.props.lookingAt.name}
          description={this.props.description}
          language={this.props.language}
        />
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Description);
