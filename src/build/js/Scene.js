// use require.ensure for deployment
import React, {useEffect, useRef} from 'react';
require('three');
require('three-gltfloader');
require('three-mapcontrols');
require('three-orbitcontrols');

/*
TODO
CHANGE LIGHT
VIDEO EXIT BUTTON
CHANGE BUTTONS TO A GROUP OF ALL OBJECTS IN SCENE
*/
const Scene = () => {
  const MOUNT = () => {
    const SCREEN_SIZE = {
      width: document.innerWidth,
      height: document.innerHeight
    };
    const SCENE = new THREE.Scene();
    const RENDERER = new THREE.WebGLRenderer({
        antialias: true
    });
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

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('click', onClick, false);

    class Scene {
      // when constructor is called, whole scene gets built
      constructor() {
        this.scene = null;
        setCamera(CAMERA, SCENE);
        setRenderer(RENDERER);
        setMapControls(MAP_CONTROLS);
      }
      createVideoScene(SCENE, video) {
        this.scene = SCENE;
        // video name passed from onClick function
        this.video = video;

        // videosphere size
        let sphere = {
          geometry: new THREE.SphereGeometry(-20, 20, 20),
          material: new THREE.MeshNormalMaterial()
        }
        let videoMesh = new THREE.Mesh(sphere.geometry, sphere.material);
        // videosphere and exit spawns in your position
        videoMesh.position.set(
          CAMERA.position.x + 5,
          CAMERA.position.y,
          CAMERA.position.z
        );
        // asignign name to videoMesh.name
        videoMesh.name = 'video';


        // setting type of controls on
        videoControls();
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
      createMapScene(SCENE) {
        this.scene = SCENE;
        loadMap();
        addLight();
        createButton();
      }
    }

    let sceneC = new Scene();
    sceneC.createMapScene(SCENE);
    setScene('map');


  function setCamera(CAMERA, SCENE) {
    // setting CAMERA init position
    CAMERA.target = new THREE.Vector3(0, 0, 0);
    // telling CAMERA what to lock at
    // last one is fov
    CAMERA.position.set(0, 40, 0);
    SCENE.add(CAMERA);
  }

  function setRenderer(RENDERER) {
    // setting RENDERER canvas size
    RENDERER.setSize(SCREEN_SIZE.with, SCREEN_SIZE.height);

    //  renderer.setPixelRatio(devicePixelRatio); // further use
    // appends html div
  }

  function setMapControls(MAP_CONTROLS) {
    // USE A CLASS INSTEAD ex MAP_CONTROLS = {dampingFactor: 0.25, enable...}
    // an animation loop is required when either damping or auto-rotation are enabled
    // damping factor is responsable to map scrolling along x and z axys
    MAP_CONTROLS.dampingFactor = 0.25;
    MAP_CONTROLS.enableDamping = true;
    // space panning lets you fly through the map
    MAP_CONTROLS.screenSpacePanning = false;
    // setting min max zoom distance
    MAP_CONTROLS.minDistance = 70;
    MAP_CONTROLS.maxDistance = 100;
    // setting min max polar angle
    MAP_CONTROLS.minPolarAngle = Math.PI / 8;
    MAP_CONTROLS.maxPolarAngle = Math.PI / 3;
  }

  animate();

  function setScene(type) {

    let status;
    // todo move background setting to setEnviroment() (currently addLight)
    SCENE.background = new THREE.Color(0xffffff);
    if (type == 'map') {
      status = true;
    }
    else if(type == 'video') {
      status = false;
    }

    ORBIT_CONTROLS.enabled = !status;
    MAP_CONTROLS.enabled = status;
    // kVIDEO_GROUP.visible = !status;
    MAP_GROUP.visible = status;
    BUTTONS_GROUP.visible = status;
  }
  function removeVideo(videoMesh) {
    let picker = SCENE.getObjectByName(videoMesh.name);
    SCENE.remove(picker);
    animate();
  }

  function videoControls() {
    ORBIT_CONTROLS.target.set(
     CAMERA.position.x + 5,
     CAMERA.position.y,
     CAMERA.position.z
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
  function addLight() {
    const light = new THREE.AmbientLight(0xffffff);
    SCENE.add(light);
  }

  function loadMap() {
    const MAP_LOADER = new THREE.GLTFLoader();
    // model's directory
    const MAP_DIR = "3d/crespi3d.gltf";
    MAP_LOADER.allowCrossOrigin = true;
    MAP_LOADER.load(MAP_DIR, (data) => {
      MAP_GROUP.add(data.scene);
      data.animations;
      data.scene;
      data.cameras;
      data.asset;
    });
    SCENE.add(MAP_GROUP);
  }

  function createButton() {
    let tmp;
    sphereData = [{
      x: 50,
      y: 20,
      z: 0,
      // represents button identification name
      id: "uno",
      // video directory
      video: ""
    },
    {
      x: 40,
      y: 20,
      z: -150,
      id: "due"
    },
    {
      x: -50,
      y: 20,
      z: -50
    }];
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
    SCENE.add(BUTTONS_GROUP);
  }


  function onWindowResize() {
    // asign new window sizes to camera
    CAMERA.aspect = window.innerWidth / window.innerHeight;
    // updates camera projections
    CAMERA.updateProjectionMatrix();
    // updates RENDERER size on reductction for responsive canvas
    RENDERER.setSize(window.innerWidth, window.innerHeight);
  }


  function onClick(e) {
    // calculates mouse position
    let mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    let raycaster = new THREE.Raycaster();
    // updates the ray with mouse and camera position
    raycaster.setFromCamera(mouse, CAMERA);
    //array of objects intersected by raycaster
    var intersects = raycaster.intersectObjects(BUTTONS_GROUP.children);
      //let videoIntersects = raycaster.intersectObjects(video.children);
      //if raycaster detects sth
     console.log(intersects);
    if (intersects.length == 1) {
      // if name in intersects == name in sphereData.id
      if (intersects[0].object.name == sphereData[0].id) {
        // calling videoScene
        sceneC.createVideoScene(SCENE);
        // set scene type
        setScene('video');
      }
    }
  }

  function animate() {
    // clock is required for MAP_CONTROLS work
    MAP_CONTROLS.update(clock.getDelta());
    // rendering SCENE and CAMERE
    RENDERER.render(SCENE, CAMERA);
    requestAnimationFrame(animate);
  }
}
  return <div className="scene" ref={MOUNT} />;

}
export default Scene;
