import React, {Component} from 'react';
require('three-orbitcontrols');
require('three-orientation-controls');
class Video extends Component {
  constructor(props) {
    super(props);
    this.app = this.props.this;
    this.video;
    this.orbitcontrols = new THREE.OrbitControls(this.app.scene, this.app.renderer.domElement);
    this.deviceOrientationControls = new THREE.DeviceOrientationControls(this.app.scene);
  }
  componentDidMount = () => {
    this.video = THREE.VideoTexture(this.videoContainer);
  }
  componentWillUnmount = () => {
    this.orbitcontrols.enabled = false;
    this.deviceOrientationControls.enabled = false;
    // this.app.controls.enabled = true;
  }
  render() {
    return(
     <video ref={el => (this.videoContainer = el)}>
       <h1>MOUNTED</h1>
       <button onClick={this.componentWillUnmount}>X</button>
     </video>
  );
  }
}
export default Video;
