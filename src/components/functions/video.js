import React, { Component } from 'react';
import { Container } from '../../style/video';
import { Skeleton } from '../../style/skeleton';
import 'three-orbitcontrols';
export class Video extends Component {
  constructor(props) {
    super(props);
    this.scene;
    this.camera;
    this.renderer;
    this.controls;
    this.state = {
      skeleton: true,
    };
  }
  render() {
    return (
      <div>
        <Container ref={el => (this.container = el)}>
          <video
            ref={el => (this.videoRef = el)}
            playsInline
            loop
            width={0}
            height={0}
            muted
            autoPlay
          />
        </Container>
        <Skeleton show={this.state.skeleton} />
      </div>
    );
  }
  componentDidUpdate = () => {
    this.onWindowResize();
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onWindowResize, false);
  };
  checkVideo = async () => {
    const check = setInterval(() => {
      if (this.videoRef.readyState >= 3) {
        this.setState({
          skeleton: false,
        });
      } else {
      }
    }, 500);
  };
  componentDidMount = () => {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.camera = new THREE.Camera();
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
    this.camera.position.set(-10, 0, 0);
    this.controls = new THREE.OrbitControls(this.camera, this.container);
    this.controls.enablePan = false;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.2;
    this.controls.screenSpacePanning = false;
    this.controls.rotateSpeed = 0.1;
    this.controls.enableZoom = false;
    let geometry = new THREE.SphereBufferGeometry(20, 20, 20);
    geometry.scale(-1, 1, 1);
    import(`../../assets/video/${this.props.name}.mp4`).then(url => {
      this.videoRef.src = url.default;
    });
    let texture = new THREE.VideoTexture(this.videoRef);
    let material = new THREE.MeshBasicMaterial({ map: texture });
    texture.flipY = true;
    let videoMesh = new THREE.Mesh(geometry, material);
    this.scene.add(videoMesh);
    window.addEventListener('resize', this.onWindowResize, false);
    this.checkVideo();
    this.animate();
  };
  onWindowResize = () => {
    // asign new window sizes to this.camera
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    // updates this.camera projections
    this.camera.updateProjectionMatrix();
    // updates this.renderer size on reductction for responsive canvas
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
  };
  animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
}
