import React, {Component} from 'react';
import {Exit, Title, Box, Description} from '../style/info';
import {connect} from 'react-redux';
import {HIDE_INFO} from '../redux/actions/actions';
import {bindActionCreators} from 'redux';
require('three-gltfloader');

const mapStateToProps = state => ({
  info: state.info
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    HIDE_INFO
  },
  dispatch
  )
});
class Info extends Component {
  constructor(props) {
    super(props);
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum viverra leo, at elementum metus blandit at. Morbi augue augue, aliquam non magna ac, posuere malesuada turpis. Curabitur lacinia sem non suscipit gravida. In imperdiet eros quam, at elementum ipsum volutpat vitae. Fusce mollis consequat ligula et convallis. Praesent tempor enim non enim tempor, ut aliquet tellus tempor. Aenean laoreet cursus dui id consequat. Donec pellentesque mollis diam, sed  gravida mi convallis a. Quisque et viverra ipsum, vitae gravida velit.';
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.camera = new THREE.PerspectiveCamera(
      75,
      1,
      1,
      10
    );
  }
  render() {
    return(
      <div>
          <div>
            <Exit onClick={this.props.HIDE_INFO}>X</Exit>
            <Title>{this.props.info}</Title>
            <Box ref={element => (this.elementRef = element)} onWindowResize={this.onResize} />
            <Description>{this.description}</Description>
          </div>
      </div>
    );
  }
  animate = () => {
   requestAnimationFrame(this.animate);
   this.renderer.render(this.scene, this.camera);
  }
  componentDidMount = () => {
    this.scene.background = new THREE.Color(0x000000);
    let controls = new THREE.OrbitControls(this.camera);
    const light = new THREE.AmbientLight(0xffffff);
    this.scene.add(light);
    const MAP_LOADER = new THREE.GLTFLoader();
    MAP_LOADER.load(`../assets/3d/${this.props.info}.gltf`, (gltf) => {
      this.scene.add(gltf.scene);
    });
    const setCamera = () => {
      // telling this.camera what to lock at
      // setting this.camera init position
      // this.camera.target = new THREE.Vector3(0, 0, 50);
      // last one is fov
      this.camera.position.set(-150, 0, 0);
      this.scene.add(this.camera);
    }
    this.elementRef.appendChild(this.renderer.domElement);
    setCamera();
    this.animate();
  }
  onResize = () => {
    // asign new window sizes to camera
    this.camera.aspect = window.clientWidth / window.clientHeight;
    // updates camera projections
    this.camera.updateProjectionMatrix();
    // updates this.renderer size on reductction for responsive canvas
    this.renderer.setSize(window.clientWidth, window.clientHeight);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
