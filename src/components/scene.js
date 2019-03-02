import React, { Component } from 'react';
import 'three-gltfloader';
import 'three-orbitcontrols';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  SHOW_INFO,
  HIDE_INFO,
  LOOKING_AT,
  DONT_LOOK,
  DONT_MOVE,
  MOVE,
  HIDE_LOADING_SCREEN,
} from '../redux/actions/actions';
import { LANGUAGE } from '../redux/thunks/changeLanguage';
import { Container, Color } from '../style/scene';
import { Button } from '../style/common';
import { config } from '../configuration/config';
import { mapStateToProps } from '../redux/mapStateToProps';
// sends props actions, taken as props to reducer
const mapDispatchToProps = dispatch => ({
  // binding actions. This method takes: (action, dispatcher)
  actions: bindActionCreators(
    {
      SHOW_INFO,
      HIDE_INFO,
      LOOKING_AT,
      DONT_LOOK,
      DONT_MOVE,
      MOVE,
      HIDE_LOADING_SCREEN,
    },
    dispatch,
  ),
  setLanguage: (language) => dispatch(LANGUAGE(language)),
});

class Scene extends Component {
  constructor(props) {
    super(props);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.buttonsGroup = new THREE.Group();
    this.minZoom = 1;
    this.maxZoom = 2;
    this.orbitControls;
    this.transformControls = [];
    this.elements = [];
    this.elementsNumber = 0;
  }
  render() {
    return (
      <Color color={this.props.lookingAt.color}>
        <Container
          color={this.props.lookingAt.color}
          ref={el => (this.container = el)}
          onTouchStart={this.cameraRay}
          onPointerDown={this.cameraRay}>
          <Button
            onTouchStart={() =>
              this.props.actions.SHOW_INFO(this.props.language)
            }
            onPointerDown={() =>
              this.props.actions.SHOW_INFO(this.props.language)
            }
          >
            ?
          </Button>
        </Container>
      </Color>
    );
  }
  changeTarget = () => {
    this.orbitControls.target.set(
      this.props.lookingAt.position.x,
      this.props.lookingAt.position.y,
      this.props.lookingAt.position.z,
    );
    // true: camera looking to object, false: camera looking to centre
    if (this.props.lookingAt.status) {
      this.orbitControls.minPolarAngle = 0;
        this.orbitControls.minDistance = 100;
        this.orbitControls.maxDistance = 100;
    } else {
      this.orbitControls.minDistance = 205;
      this.orbitControls.maxDistance = 205;
      this.orbitControls.maxPolarAngle = Math.PI - Math.PI / 2.1;
      this.orbitControls.minPolarAngle = Math.PI / 2.1;
    }
  };
  cameraRay = () => {
    // declaring camera raycaster
    let cameraRay = new THREE.Raycaster();
    let rayVector = new THREE.Vector2(0, 0);
    cameraRay.setFromCamera(rayVector, this.camera);
    let facingCamera = cameraRay.intersectObjects(this.scene.children, true);
    if (
      typeof facingCamera !== 'undefined' &&
      facingCamera.length > 0
    ) {
      // reading gltf.scene.children[0].name
      this.props.actions.LOOKING_AT(
        facingCamera[0].object.parent.parent.name,
        this.props.language,
      );
      this.changeTarget();
    } else {
      this.props.actions.DONT_LOOK();
      this.changeTarget();
    }
  };
  orbitControls = () => {
    this.orbitControls = new THREE.OrbitControls(this.camera, this.container);
    this.orbitControls.maxPolarAngle = Math.PI - Math.PI / 2.1;
    this.orbitControls.minPolarAngle = Math.PI / 2.1;
    this.orbitControls.minDistance = 207;
    this.orbitControls.maxDistance = 207;
    this.orbitControls.enablePan = false;
    this.orbitControls.enableDamping = true;
    this.orbitControls.dampingFactor = 0.2;
    this.orbitControls.screenSpacePanning = false;
    this.orbitControls.rotateSpeed = 0.1;
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    if (
      typeof this.elements !== 'undefined' &&
      this.elementsNumber !== 0 &&
      this.props.loading === true
    ) {
      this.props.actions.HIDE_LOADING_SCREEN();
    } else {
    }
    this.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize, false);
  }
  componentDidMount = () => {
    this.props.setLanguage(navigator.language);
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
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
    const ambientLight = new THREE.AmbientLight(new THREE.Color('white'), 0.24);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(
      new THREE.Color('white'),
      1,
    );
    this.scene.add(directionalLight);
    const setCamera = () => {
      // telling this.camera what to lock at
      // setting this.camera init position
      // this.camera.target = new THREE.Vector3(0, 0, 50);
      // last one is fov
      this.camera.position.set(0, 0, -190);
      this.scene.add(this.camera);
    };
    const createButton = () => {
      const MAP_LOADER = new THREE.GLTFLoader();
      // takes the keys of config and loads them into an array
      let keys = Object.getOwnPropertyNames(config);
      this.elementsNumber = keys.length;
      for (let i of keys) {
        if (i !== 'info') {
          // requiring 3d objects files using jsonloader
          let mystery = require(`../assets/3d/${i}.gltf`);
          // parsing previously loaded json file
          MAP_LOADER.parse(mystery, './', gltf => {
            // setting object position
            gltf.scene.position.set(
              config[i].position.x,
              config[i].position.y,
              config[i].position.z,
            );
            // setting scene name
            gltf.scene.name = i;
            gltf.scene.children[0].name = i;
            gltf.scene.name = i;
            gltf.scene.rotation.y = Math.PI / 2;
            // adding model to scene
            this.scene.add(gltf.scene);
            // pushing model to dedicate array
            this.elements.push(gltf.scene);
          });
        }
      }
    };
    const onWindowResize = () => {
      try {
        // asign new window sizes to camera
        this.camera.aspect =
          this.container.clientWidth / this.container.clientHeight;
        // updates camera projections
        this.camera.updateProjectionMatrix();
        // updates this.renderer size on reductction for responsive canvas
        this.renderer.setSize(
          this.container.clientWidth,
          this.container.clientHeight,
        );
      } catch (e) {}
    };
    // adding addEventListeners for functions onClick and onWindowResize
    window.addEventListener('resize', onWindowResize, false);
    // wait react container element (This must be called at the end of everything)
    setCamera();
    createButton();
    this.orbitControls();
    this.animate();
    this.cameraRay();
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scene);
