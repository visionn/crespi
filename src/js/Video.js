import React, {Component} from 'react';
require('three');
require('three-orbitcontrols');
require('three-orientation-controls');
class Video extends Component {
  constructor(props) {
    super(props);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.videoMesh;
    this.texture;
    this.material;
    this.controls;
  }
  componentDidMount = () => {
    const SCREEN_SIZE = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.scene.add(this.camera);

    this.renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);
    let controls = new THREE.OrbitControls(this.camera);
    this.camera.position.set(0, 0, 1)
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
    this.scene.add(this.videoMesh);
    this.animate();
  }
  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }
  componentWillUnmount = () => {
    this.controls.enabled = false;
    let picker = this.scene.getObjectByName(this.videoMesh.name);
    this.scene.remove(picker);
    this.sceneContainer.appendChild(this.renderer.domElement);
    this.animate();
  }
  render() {
    return(
     <div ref={el => (this.sceneContainer = el)}>
       <button onClick={this.componentWillUnmount}>X</button>
       <video ref={el => (this.videoContainer = el)}></video>
     </div>
  );
  }
}
export default Video;
