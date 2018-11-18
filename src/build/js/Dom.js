// use require.ensure for deployment
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DefineScene from './DefineScene';

export default class ThreeDiv extends Component {
  // function is called when component has been mounted
  componentDidMount() {
    DefineScene(this.threeRootElement);
  }
  // element will be container of three canvas
  // SceneManager creates canvas, listens to events, creates three object, starts render loop
  render() {
    return(
      <div ref={element => this.threeRootElement = element} />
    );
  }
}
