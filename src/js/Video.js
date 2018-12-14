import React, {Component} from 'react';
require('three-orbitcontrols');
require('three-orientation-controls');
class Video extends Component {
  constructor(props) {
    super(props);
    this.videoMesh;
    this.texture;
    this.material;
    this.controls;
  }
  componentDidMount = () => {
    this.controls = new THREE.OrbitControls(this.props.camera);
    this.props.camera.position.set(0, 0, 1)
    let geometry = new THREE.SphereBufferGeometry(-20, 20, 20);
    let video = this.videoContainer;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.src = '../videos/test.mp4';
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');
    video.play();
    let texture = new THREE.VideoTexture(video);
    let material = new THREE.MeshBasicMaterial({map: texture});
    texture.flipY = false;
    this.videoMesh = new THREE.Mesh(geometry, material);
    this.videoMesh.name = 'video';
    this.props.scene.add(this.videoMesh);
  }
  componentWillUnmount = () => {
    this.controls.enabled = false;
    let picker = this.props.scene.getObjectByName(this.videoMesh.name);
    this.props.scene.remove(picker);
    this.props.animate();
  }
  render() {
    return(
     <div>
       <button onClick={this.componentWillUnmount}>X</button>
       <video ref={el => (this.videoContainer = el)}></video>
     </div>
  );
  }
}
export default Video;
