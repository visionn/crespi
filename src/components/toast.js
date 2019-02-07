import React, { Component } from 'react';
import { Toasty, Box, Body, Title, Subtitle } from '../style/toast';
import { Exit, Top } from '../style/common';
import { connect } from 'react-redux';
import { HIDE_INFO, DONT_LOOK, SHOW_DESCRIPTION, } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { mapStateToProps } from '../redux/mapStateToProps';
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      DONT_LOOK,
      SHOW_DESCRIPTION,
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
      <Toasty
        onTouchStart={this.props.SHOW_DESCRIPTION}
        onPointerDown={this.props.SHOW_DESCRIPTION}
        lookingAt={this.props.lookingAt.status}
      >
        <Title>{this.props.lookingAt.Title}</Title>
        <Subtitle>{this.props.lookingAt.Subtitle}</Subtitle>
      </Toasty>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
