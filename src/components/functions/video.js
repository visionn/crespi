import React, { Component } from 'react';
import 'three-orbitcontrols';
export class Video extends Component {
  constructor (props) {
    super (props);
    this.scene;
    this.camera;
    this.renderer;
    this.controls;
  }
  render () {
    return (
      <div ref={el => this.container = el}>
        <video
          ref={el => this.videoRef = el}
          onWindowResize={this.onWindowResize}
        />
      </div>
    );
  }
  componentDidMount = () => {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.camera = new THREE.Camera();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(new THREE.Color('black'), 0);
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(-10, 0, 0);
    this.controls = new THREE.OrbitControls(this.camera, this.container);
    let geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
    geometry.scale( - 1, 1, 1 );
    let video = this.videoRef;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.src = '../../assets/video/pano.webm';
    video.play();
    let texture = new THREE.VideoTexture(video);
    let material = new THREE.MeshBasicMaterial({ map: texture });
    texture.flipY = false;
    let videoMesh = new THREE.Mesh(geometry, material);
    this.scene.add(videoMesh);
  }
  onWindowResize = () => {
    try {
      // asign new window sizes to this.camera
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      // updates this.camera projections
      this.camera.updateProjectionMatrix();
      // updates this.renderer size on reductction for responsive canvas
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    } catch (e) {}
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };
};
