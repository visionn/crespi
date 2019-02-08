import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '../style/description';
import { Button, Title, Subtitle, Body, Top } from '../style/common';
import { HIDE_DESCRIPTION } from '../redux/actions/actions';
import { mapStateToProps } from '../redux/mapStateToProps';
import ReactMarkdown from 'react-markdown';

const DinamicPage = props => {
  let keys = Object.getOwnPropertyNames(props.lookingAt);
  let content = Object.values(props.lookingAt);
  let desc = content.map(text =>
    createElement('div', null, text)
  )
  return (
    <div>{desc}</div>
  )
}
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
        <DinamicPage lookingAt={this.props.lookingAt}/>
      </Container>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);
