import React, {Component} from 'react';
require('three');
require('three-gltfloader');
require('three-objectcontrols');
require('three-orbitcontrols');
// import App from 'App';

class Scene extends Component {
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
    this.buttonsGroup = new THREE.Group();
    this.sphereData = [{
      x: 40,
      y: 0,
      z: 0,
      // represents button identification name
      id: "uno",
      // video directory
      video: ""
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
      lookingAt: props.initialState,
      right: props.initialStatus
    }
  }
  changePosition = () => {
    // getting position of object faced by camera
    let i = 0;
    // if item is found saves position inside i
    while (this.sphereData[i].id != this.state.lookingAt || i < this.sphereData.lenght) {
      i++;
    }
    if (this.sphereData[i].z == 0) {
      this.camera.position.x = this.sphereData[i].x - 20;
    }
    if (this.sphereData[i].x == 0) {
      this.camera.position.z = this.sphereData[i].z - 20;
    }
  }
  cameraRay = () => {
    let cameraRay = new THREE.Raycaster();
    let cameraWatching;
    let rayVector = new THREE.Vector2(0, 0);

    // todo add frustum https://stackoverflow.com/questions/24877880/three-js-check-if-object-is-in-frustum
    cameraRay.setFromCamera(rayVector, this.camera)
    cameraWatching = cameraRay.intersectObjects(this.buttonsGroup.children, false);
    this.setState({
      lookingAt: cameraWatching[0].object.name
    });
  }
  moveLeft = () => {
    this.camera.rotateY(-Math.PI / 2);
    this.cameraRay();
    this.setPositionZero();
  }
  moveRight = () => {
    // rotates by 90 degrees on y axys
    this.camera.rotateY(Math.PI / 2);
    this.cameraRay();
    this.setPositionZero();
  }
  setPositionZero = () => {
    this.camera.position.x = 0;
    this.camera.position.z = 0;
  }
  render() {
    return (
      <div ref={el => (this.container = el)}>
        <button onClick={() => this.moveLeft()}>⬅</button>
        <button onClick={() => this.changePosition()}>{this.state.lookingAt}</button>
        <button onClick={() => this.moveRight()}>➡</button>
      </div>
    );
  }
  componentDidMount = () => {
    const SCREEN_SIZE = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.scene.background = new THREE.Color(0x222222);
    this.renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);
    const MAP_GROUP = new THREE.Group();

    const createVideoScene = (video) => {
    // videosphere size
      let sphere = {
        geometry: new THREE.SphereGeometry(-20, 20, 20),
        material: new THREE.MeshNormalMaterial()
      }
      let videoMesh = new THREE.Mesh(sphere.geometry, sphere.material);
      // videosphere and exit spawns in your position
      videoMesh.position.set(
        this.camera.position.x + 5,
        this.camera.position.y,
        this.camera.position.z
      );
      // asignign name to videoMesh.name
      videoMesh.name = 'video';
      // setting type of controls on
      this.scene.add(videoMesh);
      // for testing purpuose; if key 'm' is pressed, kVIDEO_GROUP toggles of
      window.onkeydown = (e) => {
        // if true, returns e.keyCode val in keyCode
        // if not returns e.which
        let keyCode = e.keyCode ? e.keyCode : e.which;
        // 77 = m key
        if (keyCode == 77) {
          // toggles video off and map off
          setScene('map');
          removeVideo(videoMesh);
        }
      }
    }

    const setCamera = () => {
      // setting this.camera init position
      this.camera.target = new THREE.Vector3(0, 0, 0);
      // telling this.camera what to lock at
      // last one is fov
      this.camera.position.set(0, 0, 0);
      this.scene.add(this.camera);
    }

    const setScene = (type) => {
      let status;
      // todo move background setting to setEnviroment() (currently addLight)
      this.scene.background = new THREE.Color(0xffffff);
      if (type == 'map') {
        status = true;
      }
      else if (type == 'video') {
        status = false;
      }
      // kVIDEO_GROUP.visible = !status;
      this.buttonsGroup.visible = status;
    }

    const removeVideo = (videoMesh) => {
      let picker = this.scene.getObjectByName(videoMesh.name);
      this.scene.remove(picker);
      animate();
    }
    // todo change name into setEnviroment

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

    const changePosition = (i) => {
      this.camera.position.x = this.sphereData[i].x;
      this.camera.position.z = this.sphereData[i].z;
    }

    const onClick = (e) => {
      // calculates mouse position
      let mouse = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      let raycaster = new THREE.Raycaster();
      // updates the ray with mouse and camera position
      raycaster.setFromCamera(mouse, this.camera);
      //array of objects intersected by raycaster
      let intersects = raycaster.intersectObjects(this.buttonsGroup.children);
      //let videoIntersects = raycaster.intersectObjects(video.children);
      //if raycaster detects sth
      let i;
      console.log(intersects);
      if (intersects.length == 1) {
        this.changePosition();
      }
    }

    window.addEventListener('click', onClick, false);
    // adding addEventListeners for functions onClick and onWindowResize
    window.addEventListener('resize', onWindowResize, false);

    const render = () => {
      this.renderer.render(this.scene, this.camera);
    }
    const animate = () => {
      requestAnimationFrame(animate);
      // cameraWatching = intersections[0].object.name
      // console.log(cameraWatching);
      // this.buttonsGroup.children[0].position.y += 1;
      render();
    }

    // wait react container element (This must be called at the end of everything)
    this.container.appendChild(this.renderer.domElement);

    setCamera();
    createButton();
    animate();
  }
}

export default Scene;
