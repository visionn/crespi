import React, { Component } from 'react';
import { Container } from '../../style/video';
import 'three-orbitcontrols';
export class Video extends Component {
  constructor (props) {
    super (props);
    this.scene;
    this.camera;
    this.renderer;
    this.controls;
    this.state = {
      height: window.innerHeight * 0.3,
    };
  }
  render () {
    return (
      <Container
        height={this.state.height}
        ref={el => this.container = el}
        onPointerDown={this.hover}
        onTouchStart={this.hover}
      >
        <video
          ref={el => this.videoRef = el}
        />
      </Container>
    );
  }
  hover = () => {
    this.setState({
      height: window.innerHeight * 0.9,
    });
  }
  componentDidUpdate = () => {
    this.camera.aspect = this.container.clientWidth / this.state.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.state.height);

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
    let geometry = new THREE.SphereBufferGeometry( 20, 20, 20 );
    geometry.scale( - 1, 1, 1 );
    this.videoRef.visibility = 'hidden';
    this.videoRef.width = 0;
    this.videoRef.height = 0;
    this.videoRef.crossOrigin = 'anonymous';
    this.videoRef.loop = true;
    this.videoRef.muted = true;
    this.videoRef.src = '../../assets/video/pano.webm';
    this.videoRef.setAttribute( 'webkit-playsinline', 'webkit-playsinline' );
    this.videoRef.play();
    let texture = new THREE.VideoTexture(this.videoRef);
    let material = new THREE.MeshBasicMaterial({ map: texture });
    texture.flipY = false;
    let videoMesh = new THREE.Mesh(geometry, material);
    this.scene.add(videoMesh);
    window.addEventListener('resize', this.onWindowResize, false);
    this.animate();
  }
  onWindowResize = () => {
    // asign new window sizes to this.camera
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    // updates this.camera projections
    this.camera.updateProjectionMatrix();
    // updates this.renderer size on reductction for responsive canvas
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };
};
