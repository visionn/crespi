import React, { Component } from 'react';
import 'three-orbitcontrols';
import { Container } from '../../style/video';
export class Photo extends Component {
  constructor (props) {
    super (props);
    this.scene;
    this.camera;
    this.renderer;
    this.controls;
  }
  render () {
    return (
      <Container ref={el => this.container = el} />
    );
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize, false);
  }
  componentDidMount = () => {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.camera = new THREE.Camera();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(new THREE.Color('white'));
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(-10, 0, 0);
    this.camera.lookAt(0, 0, 0)
    this.controls = new THREE.OrbitControls(this.camera, this.container);
    let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    window.addEventListener('resize', this.onWindowResize, false);
    this.animate();
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
