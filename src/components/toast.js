import React, { Component } from 'react';
import { Toasty, Box, Body, Title, Subtitle } from '../style/toast';
import { Exit, Top } from '../style/common';
import { connect } from 'react-redux';
import {
  HIDE_INFO,
  DONT_LOOK,
  SHOW_DESCRIPTION,
} from '../redux/actions/actions';
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
        onTouchStart={() =>
          this.props.SHOW_DESCRIPTION(
            this.props.lookingAt.name,
            this.props.language,
          )
        }
        onPointerDown={() =>
          this.props.SHOW_DESCRIPTION(
            this.props.lookingAt.name,
            this.props.language,
          )
        }
        size={this.props.description.toastSize}
        description={this.props.description.status}
        lookingAt={this.props.lookingAt.status}
      >
        <Title>{this.props.lookingAt.title}</Title>
        <Subtitle>{this.props.lookingAt.subtitle}</Subtitle>
      </Toasty>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
