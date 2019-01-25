import React, { Component } from 'react';
import { Container, Box, Body, Title, Subtitle } from '../style/toast';
import { Exit, Top } from '../style/common';
import { connect } from 'react-redux';
import { HIDE_INFO, DONT_LOOK } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = state => ({
  info: state.info,
  lookingAt: state.looking,
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      DONT_LOOK,
    },
    dispatch,
  ),
});
class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: false,
      height: '6rem',
    }
  }
  render() {
    return (
      <Container
        show={this.state.showBody}
        top={this.state.top}
        height={this.state.height}
        onTouchStart={this.changeState}
        onPointerDown={this.changeState}
        lookingAt={this.props.lookingAt.status}
      >
        <Title>{this.props.lookingAt.title}</Title>
        <Subtitle>{this.props.lookingAt.subtitle}</Subtitle>
        {
          this.props.lookingAt.status ?
        <Body
        show={this.state.showBody}
        lookingAt={this.props.lookingAt.status}
        >
          <Top>
          <Exit
          onTouchStart={this.props.DONT_LOOK}
          onPointerDown={this.props.DONT_LOOK}
          >
          X
          </Exit>
          </Top>
          <ReactMarkdown source={this.props.lookingAt.description} />
        </Body>
        : null
       }
      </Container>
    );
  }
  changeState = e => {
    if(this.props.lookingAt) {
      this.setState ({
        showBody: true,
        height: 'auto',
      });
    }
    else {
      this.setState ({
        showBody: false,
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
