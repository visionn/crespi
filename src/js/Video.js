import React, {Component} from 'react';
require('three-orbitcontrols');
require('three-orientation-controls');
class Video extends Component {
  constructor(props) {
    super(props);
    this.geometry = new THREE.SphereBufferGeometry(-20, 20, 20);
    this.texture;
    this.material;
    this.orbitcontrols = new THREE.OrbitControls(this.props.scene, this.props.domElement);
    this.deviceOrientationControls = new THREE.DeviceOrientationControls(this.props.scene);
    this.video;
  }
  componentDidMount = () => {
    this.video = new THREE.Mesh(this.geometry, this.material);
    this.video.name = 'video';
    this.videoContainer.src = 'ada.mp4';
    this.texture = new THREE.VideoTexture(this.videoContainer);
    this.material = new THREE.MeshBasicMaterial({map: this.texture});
    this.props.scene.add(this.video);
  }
  componentWillUnmount = () => {
    this.orbitcontrols.enabled = false;
    this.deviceOrientationControls.enabled = false;
    let picker = this.props.scene.getObjectByName(this.video.name);
    this.props.scene.remove(picker);
    this.props.animate();
  }
  render() {
    return(
     <div>
       <video ref={el => (this.videoContainer = el)} />
     </div>
  );
  }
}
export default Video;
