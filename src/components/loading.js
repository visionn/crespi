import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/mapStateToProps';
import { Container, Element } from '../style/loading';
class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container status={this.props.loading}>
        <Element>crespi</Element>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Loading);
