import React, {Component} from 'react';
require('three');
require('three-gltfloader');
require('three-objectcontrols');
import {createStore} from 'redux';
import reducer from '../reducers/reducer';
// import {ADD_ZOOM, REMOVE_ZOOM} from '../actions/actions';
// import Scene from './Scene';
import Video from './Video';
// import '../css/main.css';

/* TODO:
  add redux to index for universal state
  add sass loader
  fix controls
*/
class Dom extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.buttonsGroup = new THREE.Group();
    this.selected;
    this.minZoom = 1;
    this.maxZoom = 2;
    this.sphereData = [{
      x: 40,
      y: 0,
      z: 0,
      // represents button identification name
      id: "uno",
      // video directory
    },
    {
      x: -40,
      y: 0,
      z: 0,
      id: "due"
    },
    {
      x: 0,
      y: 0,
      z: 40,
      id: "tre"
    },
    {
      x: 0,
      y: 0,
      z: -40,
      id: "cinque"
    }];
    this.state = {
      lookingAt: '',
      buttonState: false,
      videoStatus: false
    }
  }
  render() {
   return (
    <div className="Dom" ref={el => (this.container = el)} onClick={this.onClickEvent}>
      <button onClick={() => this.rotateCamera(false)}>⬅</button>
      <button onClick={() => this.setZoom(this.maxZoom)}>
        {this.state.buttonState ? 'Guarda il video' : this.state.lookingAt}
      </button>
      <button onClick={() => this.rotateCamera(true)}>➡</button>
      <video className="Video">
        {this.state.videoStatus ? <Video video={this.state.lookingAt + '.mp4'} animate={this.animate} scene={this.scene} domElement={this.renderer.domElement} camera={this.camera}/> : null}
      </video>
   </div>
   );
  }
  setZoom = (zoom) => {
    // getting position of object faced by camera
    this.camera.updateProjectionMatrix();
    if (zoom === this.maxZoom) {
      for (let i = 0; i < this.zoom; i++) {
        this.camera.zoom = i;
      }
      if (this.state.buttonState) {
        this.setState({
          videoStatus: true
        });
      }
      else {
        this.setState({
          buttonState: true
        });
      }
    }
    else {
      this.cameraZoom = zoom;
      this.setState({
        buttonState: false,
        videoStatus: false
      })
    }
  }
  cameraRay = () => {
    let cameraRay = new THREE.Raycaster();
    let rayVector = new THREE.Vector2(0, 0);
    cameraRay.setFromCamera(rayVector, this.camera);
    this.selected = cameraRay.intersectObjects(this.buttonsGroup.children, false);
    this.setState({
      lookingAt: this.selected[0].object.name
    });
  }
  rotateCamera = (direction) => {
    // true = right, false = left
    if (direction) {
      this.camera.rotateY(-Math.PI / 2);
    }
    else {
      this.camera.rotateY(Math.PI / 2);
    }
    this.cameraRay();
    this.setZoom(this.minZoom);
  }
  onClickEvent = (e) => {
    // calculates mouse position
    let mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    let raycaster = new THREE.Raycaster();
    // updates the ray with mouse and camera position
    raycaster.setFromCamera(mouse, this.camera);
    //array of objects intersected by raycaster
    this.selected = raycaster.intersectObjects(this.buttonsGroup.children);
    //let videoIntersects = raycaster.intersectObjects(video.children);
    //if raycaster detects sth
    console.log(this.selected);
    if (this.selected.length == 1) {
       this.setZoom(this.maxZoom);
    }
  }
  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }
  componentDidMount = () => {
    const SCREEN_SIZE = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.scene.background = new THREE.Color(0x222222);
    this.renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);
    const setCamera = () => {
      // setting this.camera init position
      this.camera.target = new THREE.Vector3(0, 0, 0);
      // telling this.camera what to lock at
      // last one is fov
      this.camera.position.set(0, 0, 0);
      this.scene.add(this.camera);
    }
  const createButton = () => {
      let tmp;
      // button dimentions
      let sphere = {
        geometry: new THREE.SphereGeometry(10, 2, 100),
        material: new THREE.MeshNormalMaterial()
      }

      let controls = [null];
      let controlsTmp;
      //spheredata.lenght determinates sphere quantity
      for (let i = 0; i < this.sphereData.length; i++) {
        tmp = new THREE.Mesh(sphere.geometry, sphere.material);
        // setting positions
        tmp.position.x = this.sphereData[i].x;
        tmp.position.y = this.sphereData[i].y;
        tmp.position.z = this.sphereData[i].z;
        tmp.name = this.sphereData[i].id;
        // setting controls for each object
        controls.Tmp = new THREE.ObjectControls(
          this.camera,
          this.renderer.domElement,
          tmp
        );
        // pushing tmp to end of controls[]
        controls.push(tmp);
        // adding tm to this.buttonsGroup
        this.buttonsGroup.add(tmp);
      }
      this.scene.add(this.buttonsGroup);
        // controls.setRotationSpeed(2);
    }
    const onWindowResize = () => {
      // asign new window sizes to camera
      this.camera.aspect = window.innerWidth / window.innerHeight;
      // updates camera projections
      this.camera.updateProjectionMatrix();
      // updates this.renderer size on reductction for responsive canvas
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    // adding addEventListeners for functions onClick and onWindowResize
    window.addEventListener('resize', onWindowResize, false);
    // wait react container element (This must be called at the end of everything)
    this.container.appendChild(this.renderer.domElement);
    setCamera();
    createButton();
    this.animate();
    this.cameraRay();
  }
}

export default Dom;
