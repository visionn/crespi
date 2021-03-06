import React, { Component } from 'react';
import 'three-gltfloader';
import 'three-orbitcontrols';
import { bindActionCreators } from 'redux';
import { loadModels } from './functions/loadModels';
import { connect } from 'react-redux';
import {
  SHOW_INFO,
  HIDE_INFO,
  LOOKING_AT,
  DONT_LOOK,
  HIDE_LOADING_SCREEN,
  SHOW_DESCRIPTION,
} from '../redux/actions/actions';
import { LANGUAGE } from '../redux/thunks/changeLanguage';
import { Container, ColouredButton } from '../style/scene';
import { Button } from '../style/common';
import { TopLogo } from './top_logo';
import { EasterEgg } from './easter_egg';
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
      SHOW_DESCRIPTION,
      HIDE_LOADING_SCREEN,
    },
    dispatch,
  ),
  setLanguage: language => dispatch(LANGUAGE(language)),
});

class Scene extends Component {
  constructor(props) {
    super(props);
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.camera;
    this.orbitControls;
    this.elements = [];
    this.mouseClick = [];
    this.centralSphere;
    this.state = {
      easterEgg: false,
    };
  }
  render() {
    return (
      <div>
        <Container
          color={this.props.lookingAt.color}
          ref={el => (this.container = el)}
          onTouchStart={event => {
            this.mouseRay(event);
          }}
          onPointerDown={event => {
            this.mouseRay(event);
          }}
        >
          <ColouredButton
            onTouchStart={() =>
              this.props.actions.SHOW_DESCRIPTION('info', this.props.language)
            }
            onPointerDown={() =>
              this.props.actions.SHOW_DESCRIPTION('info', this.props.language)
            }
          >
            i
          </ColouredButton>
          <TopLogo />
          <EasterEgg status={this.state.easterEgg} />
        </Container>
      </div>
    );
  }
  mouseRay = event => {
    let mouseRay = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    if (event.type === 'touchstart') {
      mouse.x = (event.touches[0].clientX / this.container.clientWidth) * 2 - 1;
      mouse.y =
        -(event.touches[0].clientY / this.container.clientHeight) * 2 + 1;
    } else {
      mouse.x = (event.clientX / this.container.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / this.container.clientHeight) * 2 + 1;
    }
    mouseRay.setFromCamera(mouse, this.camera);
    this.mouseClick = mouseRay.intersectObjects(this.scene.children, true);
    if (this.mouseClick !== 'undefined' && this.mouseClick.length > 0) {
      if (this.mouseClick[0].object.parent.parent.parent.name === 'centro') {
        this.setState({
          easterEgg: true,
        });
        setTimeout(() => {
          this.setState({
            easterEgg: false,
          });
        }, 3000);
      } else {
        // reading gltf.scene.children[0].name
        this.props.actions.LOOKING_AT(
          this.mouseClick[0].object.parent.name ||
            this.mouseClick[0].object.parent.parent.name,
          this.props.language,
        );
      }
    } else {
      this.props.actions.DONT_LOOK();
    }
  };
  componentDidUpdate = () => {
    this.orbitControls.target.set(
      this.props.lookingAt.position.x,
      0,
      this.props.lookingAt.position.z,
    );
    this.orbitControls.maxPolarAngle = this.props.lookingAt.controls.maxPolarAngle;
    this.orbitControls.minPolarAngle = this.props.lookingAt.controls.minPolarAngle;
    this.orbitControls.minDistance = this.props.lookingAt.controls.minDistance;
    this.orbitControls.maxDistance = this.props.lookingAt.controls.maxDistance;
    this.orbitControls.enablePan = this.props.lookingAt.controls.enablePan;
    this.orbitControls.enableDamping = this.props.lookingAt.controls.enableDamping;
    this.orbitControls.dampingFactor = this.props.lookingAt.controls.dampingFactor;
    this.orbitControls.screenSpacePanning = this.props.lookingAt.controls.screenSpacePanning;
    this.orbitControls.rotateSpeed = this.props.lookingAt.controls.rotateSpeed;
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    if (
      typeof this.elements !== 'undefined' &&
      this.elements.length >= 3 &&
      this.props.loading === true
    ) {
      this.props.actions.HIDE_LOADING_SCREEN();
      this.props.loading = false;
    } else {
    }
    this.orbitControls.update();
    this.renderer.render(this.scene, this.camera);
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize, false);
  };
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
    this.orbitControls = new THREE.OrbitControls(this.camera, this.container);
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
      this.camera.position.set(0, 0, -200);
      this.scene.add(this.camera);
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
    loadModels(this.scene, this.elements);
    this.animate();
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scene);
