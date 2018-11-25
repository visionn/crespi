import React, {Component} from 'react';
require('three');
require('three-gltfloader');
require('three-mapcontrols');
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
    this.arr = 25;
    this.state = {
      lookingAt: props.initialState,
      right: props.initialStatus
    }
  }
  changeSceneState() {
    // updates react element
    this.setState({
      lookingAt: 'nothing'
    });
  }
  moveRight() {
    // rotates by 90 degrees on y axys
    this.camera.rotateY(Math.PI / 2);
  }
  render() {
    return (
      <div ref={el => (this.container = el)}>
        <button>{this.state.lookingAt}</button>
        <button onClick={() => this.moveRight()}>➡</button>
        <p>{console.log(this.state.right)}</p>
      </div>
    );
  }
  onButtonClick() {
    console.log('tapped');
  }
  componentDidMount() {
   const SCREEN_SIZE = {
     width: window.innerWidth,
     height: window.innerHeight
   };
   this.scene.background = new THREE.Color(0x222222);
   this.renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);

   const ORBIT_CONTROLS = new THREE.OrbitControls(this.camera);
   let sphereData;

   const BUTTONS_GROUP = new THREE.Group();
   const MAP_GROUP = new THREE.Group();
   let cameraRay = new THREE.Raycaster();
   let cameraWatching;
   let center = new THREE.Vector2(0, 0);

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
  else if(type == 'video') {
    status = false;
  }

  // kVIDEO_GROUP.visible = !status;
  BUTTONS_GROUP.visible = status;
}

  const removeVideo = (videoMesh) => {
  let picker = this.scene.getObjectByName(videoMesh.name);
  this.scene.remove(picker);
  animate();
}

 const setOrbitControls = () =>  {
  ORBIT_CONTROLS.target.set(
   this.camera.position.x + 5,
   this.camera.position.y,
   this.camera.position.z
  );
  ORBIT_CONTROLS.enablePan = false;
  ORBIT_CONTROLS.enableZoom = false;
    /*
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    */
}

// todo change name into setEnviroment



  const createButton = () => {
  let tmp;
  sphereData = [{
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
    z: 40
  },
  {
    x: 0,
    y: 0,
    z: -40
  }
 ];
  // button dimentions
  let sphere = {
    geometry: new THREE.SphereGeometry(10, 2, 100),
    material: new THREE.MeshNormalMaterial()
  }
  //spheredata.lenght determinates sphere quantity
  for (let i = 0; i < sphereData.length; i++) {
    tmp = new THREE.Mesh(sphere.geometry, sphere.material);
    tmp.position.x = sphereData[i].x;
    tmp.position.y = sphereData[i].y;
    tmp.position.z = sphereData[i].z;
    tmp.name = sphereData[i].id;
    BUTTONS_GROUP.add(tmp);
  }
  this.scene.add(BUTTONS_GROUP);
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
      if (sphereData[i].x > 0) {
      this.camera.position.x = sphereData[i].x - 10;
      }
      else if (sphereData[i].z > 0) {
      this.camera.position.z = sphereData[i].z - 10;
      }
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
   var intersects = raycaster.intersectObjects(BUTTONS_GROUP.children);
   //let videoIntersects = raycaster.intersectObjects(video.children);
   //if raycaster detects sth
   let i;
   console.log(intersects);
   if (intersects.length == 1) {
     if (intersects[0].object.name == sphereData[0].id) {
       i = 0;
       changePosition(i);
       // createVideoScene();
       // setScene('video');
     }
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
      this.camera.updateMatrixWorld();
      // todo add frustum https://stackoverflow.com/questions/24877880/three-js-check-if-object-is-in-frustum
      cameraRay.setFromCamera(center, this.camera);
      let intersections = cameraRay.intersectObjects(BUTTONS_GROUP.children);
      // console.log(intersections[0].object);
      // cameraWatching = intersections[0].object.name
      // console.log(cameraWatching);
      render();
      }

   // wait react container element (This must be called at the end of everything)

   this.container.appendChild(this.renderer.domElement);
   setCamera();
   setOrbitControls();
   createButton();
   animate();
  }
}



export default Scene;
