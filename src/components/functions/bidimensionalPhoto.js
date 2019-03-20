import React, { Component } from 'react';
import { Photo, PhotoContainer } from '../../style/description';
export class BidimensionalPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
    };
  }
  render() {
    return (
      <PhotoContainer>
        <Photo src={this.state.photo} />
      </PhotoContainer>
    );
  }
  componentDidMount = () => {
    import(`../../assets/img/${this.props.name}/${
      this.props.fileName
    }.jpg`).then(url => {
      this.setState({
        photo: url.default,
      });
    });
  };
}
