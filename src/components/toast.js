import React, { Component } from 'react';
import { Toasty, Box, Body, Title, Subtitle } from '../style/toast';
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
    };
  }
  render() {
    return (
      <Toasty
        show={this.state.showBody}
        top={this.state.top}
        height={this.state.height}
        onTouchStart={this.changeState}
        onPointerDown={this.changeState}
        lookingAt={this.props.lookingAt.status}
      >
        <Title>{this.props.lookingAt.title}</Title>
        <Subtitle>{this.props.lookingAt.subtitle}</Subtitle>
        <Body show={this.state.showBody}>
          <Top show={this.state.showBody}>
            <Exit
              onTouchStart={this.changeState}
              onPointerDown={this.changeState}
            >
              X
            </Exit>
          </Top>
          <ReactMarkdown source={this.props.lookingAt.description} />
        </Body>
      </Toasty>
    );
  }
  changeState = e => {
    if (this.props.lookingAt.status) {
      let prev = this.state.showBody;
      this.setState({
        showBody: !prev,
        height: `${!prev ? 'auto' : '6rem'}`,
      });
    } else {
      this.setState({
        showBody: false,
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
