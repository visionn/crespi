import React, {Component} from 'react';
require('three-orbitcontrols');
require('three-orientation-controls');
class Video extends Component {
  constructor(props) {
    super(props);
    this.app = this.props.this;
    this.geometry = new THREE.SphereBufferGeometry(-20, 20, 20);
    this.texture;
    this.material;
    this.orbitcontrols = new THREE.OrbitControls(this.app.scene, this.app.renderer.domElement);
    this.deviceOrientationControls = new THREE.DeviceOrientationControls(this.app.scene);
    this.video;
  }
  componentDidMount = () => {
    this.video = new THREE.Mesh(this.geometry, this.material);
    this.video.name = 'video';
    this.videoContainer.src = 'ada.mp4';
    this.texture = new THREE.VideoTexture(this.videoContainer);
    this.material = new THREE.MeshBasicMaterial({map: this.texture});
    this.app.scene.add(this.video);
  }
  componentWillUnmount = () => {
    this.orbitcontrols.enabled = false;
    this.deviceOrientationControls.enabled = false;
    let picker = this.app.scene.getObjectByName(this.video.name);
    this.app.scene.remove(picker);
    this.app.animate();
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
