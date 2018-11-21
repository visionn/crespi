import React, {Component} from 'react';
require('three');
require('three-gltfloader');
require('three-mapcontrols');
require('three-orbitcontrols');
import App from './App';

class Scene extends Component {
  render() {
    return (
      <div
        ref={el => (this.container = el)}
      />
    );
  }
  componentDidMount() {
   const SCREEN_SIZE = {
     width: window.innerWidth,
     height: window.innerHeight
   };
   const SCENE = new THREE.Scene();
   SCENE.background = new THREE.Color(0x222222);
   const RENDERER = new THREE.WebGLRenderer({ antialias: true });
   RENDERER.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);

   const CAMERA = new THREE.PerspectiveCamera(
     75,
     SCREEN_SIZE.width / SCREEN_SIZE.height,
     0.1,
     1000
   );
   const MAP_CONTROLS = new THREE.MapControls(CAMERA, RENDERER.domElement);
   const ORBIT_CONTROLS = new THREE.OrbitControls(CAMERA);
   let sphereData;
   let clock = new THREE.Clock();

   const BUTTONS_GROUP = new THREE.Group();
   const MAP_GROUP = new THREE.Group();

   const geometry = new THREE.SphereGeometry();
 const material = new THREE.MeshNormalMaterial({});

  App(SCENE, CAMERA, RENDERER, MAP_CONTROLS, ORBIT_CONTROLS, BUTTONS_GROUP, MAP_GROUP, SCREEN_SIZE, sphereData);
   const animate = () => {
     requestAnimationFrame(animate);
     RENDERER.render(SCENE, CAMERA);
   }

   const onClick = (e) => {
     // calculates mouse position
     let mouse = new THREE.Vector2(
       (e.clientX / window.innerWidth) * 2 - 1,
       -(e.clientY / window.innerHeight) * 2 + 1
     );
     let raycaster = new THREE.Raycaster();
     // updates the ray with mouse and camera position
     raycaster.setFromCamera(mouse, CAMERA);
     //array of objects intersected by raycaster
     var intersects = raycaster.intersectObjects(SCENE.children);
     //let videoIntersects = raycaster.intersectObjects(video.children);
     //if raycaster detects sth
     console.log(intersects);
     if (intersects.length == 1) {
       console.log('tapped');
      }
    }

   const onWindowResize = () => {
    // asign new window sizes to camera
    CAMERA.aspect = window.innerWidth / window.innerHeight;
    // updates camera projections
    CAMERA.updateProjectionMatrix();
    // updates RENDERER size on reductction for responsive canvas
    RENDERER.setSize(window.innerWidth, window.innerHeight);
   }


   // adding addEventListeners for functions onClick and onWindowResize
   window.addEventListener('resize', onWindowResize, false);
   window.addEventListener('click', onClick, false);

   // wait react container element (This must be called at the end of everything)
   this.container.appendChild(RENDERER.domElement);
   animate();
  }
}

export default Scene;
