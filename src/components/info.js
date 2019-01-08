import React, { Component } from 'react';
import { Exit, Title, Description, Top, Container } from '../style/info';
import { connect } from 'react-redux';
import { HIDE_INFO, LOOKING_AT } from '../redux/actions/actions';
import { bindActionCreators } from 'redux';

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
    this.description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum viverra leo, at elementum metus blandit at. Morbi augue augue, aliquam non magna ac, posuere malesuada turpis. Curabitur lacinia sem non suscipit gravida. In imperdiet eros quam, at elementum ipsum volutpat vitae. Fusce mollis consequat ligula et convallis. Praesent tempor enim non enim tempor, ut aliquet tellus tempor. Aenean laoreet cursus dui id consequat. Donec pellentesque mollis diam, sed  gravida mi convallis a. Quisque et viverra ipsum, vitae gravida velit.';
  }
  render() {
    return (
      <Container>
        <Top>
          <Exit onClick={this.props.HIDE_INFO}>X</Exit>
          <Title>{this.props.lookingAt}</Title>
        </Top>
        <Description>{this.description}</Description>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);
