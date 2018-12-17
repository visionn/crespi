import React, {Component} from 'react';
require('three');
require('three-gltfloader');
require('three-objectcontrols');
import {connect} from 'react-redux';
import {SHOW_INFO, HIDE_INFO} from '../redux/actions/actions';
import Info from './info';
import Video from './Video';
import {Scene, Toast} from '../style/dom.js';
/* TODO:
  add redux to index for universal state
  add sass loader
  fix controls
*/

class Dom extends Component {
  constructor(props) {
    super(props);
    STORE.subscribe(() => console.log(STORE.getState()));
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
      x: 15,
      y: 15,
      z: 0,
      // represents button identification name
      id: 'fabbrica',
      // video directory
    },
    {
      x: -15,
      y: 15,
      z: 0,
      // represents button identification name
      id: 'mystery',
      // video directory
    }
   ];
    this.state = {
      lookingAt: '',
      videoStatus: false
    }
  }
  render() {
   return (
    <div>
      {this.props.store.info || this.state.videoState ? null :
        <Scene ref={el => (this.container = el)} onMouseDown={this.cameraRay} onClick={this.onClickEvent}>
          {this.state.videoStatus ? null :
            <Toast onClick={this.showInfo}>
              {STORE.getState().info ? 'Guarda il video' : this.state.lookingAt}
            </Toast>
          }
        </Scene>
      }
     <div>
       {STORE.getState().info ? <Info /> : null}
     </div>
     <div>
       {STORE.getState().info ? <Video /> : null}
     </div>
   </div>
   );
  }
  showInfo = () => {
    STORE.dispatch(SHOW_INFO());
  }
  cameraRay = () => {
    let cameraRay = new THREE.Raycaster();
    let rayVector = new THREE.Vector2(0, 0);
    cameraRay.setFromCamera(rayVector, this.camera);
    this.selected = cameraRay.intersectObjects(this.buttonsGroup.children, true);
    console.log(this.selected);
    try{
      if (typeof(this.selected) !== 'undefined') {
        this.setState({
          lookingAt: this.selected[0].object.name
        });
      }
    }
    catch (e) {
      this.setState({
        lookingAt: ''
      });
    }
  }
  controls = () => {
    let controls = new THREE.OrbitControls(this.camera);
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
    this.selected = raycaster.intersectObjects(this.buttonsGroup.children[0].children, true);
    //let videoIntersects = raycaster.intersectObjects(video.children);
    //if raycaster detects sth
    console.log(this.selected);
    if (this.selected.length == 1) {
       this.showInfo();
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
    this.scene.background = new THREE.Color(0xffffff);
    this.renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);
    const light = new THREE.AmbientLight(0xffffff);
    this.scene.add(light);
    const setCamera = () => {
      // telling this.camera what to lock at
      // setting this.camera init position
      // this.camera.target = new THREE.Vector3(0, 0, 50);
      // last one is fov
      this.camera.position.set(0, 0, 80);
      this.scene.add(this.camera);
    }
    const createButton = () => {
      const MAP_LOADER = new THREE.GLTFLoader();
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
        // alt + 0096 for backthick (``)
        MAP_LOADER.load(`../assets/3d/${this.sphereData[i].id}.gltf`, (gltf) => {
          gltf.scene.position.x = this.sphereData[i].x;
          gltf.scene.position.y = this.sphereData[i].y;
          gltf.scene.position.z = this.sphereData[i].z;
          gltf.scene.children[0].name = this.sphereData[i].id;
          console.log(gltf.scene);
          this.buttonsGroup.add(gltf.scene);
        });
        // adding tm to this.buttonsGroup
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
    this.controls();
    this.animate();
    this.cameraRay();
  }
}
const DOM = connect({SHOW_INFO, HIDE_INFO})(Dom);
export default DOM;
