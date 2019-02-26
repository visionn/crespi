import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../redux/mapStateToProps';
<<<<<<< HEAD
import { Container, Element } from '../style/loading';
=======
import { Container } from '../style/loading';
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
<<<<<<< HEAD
    return (
      <Container status={this.props.loading}>
        <Element>crespi</Element>
      </Container>
    );
=======
    return <Container status={this.props.loading}>crespi</Container>;
>>>>>>> 03d2b473717304eb575c5825895ef11c3c3ca3b7
  }
}

export default connect(mapStateToProps)(Loading);
