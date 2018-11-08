const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const mapControls = new THREE.MapControls(camera, renderer.domElement)
const orbitControls = new THREE.OrbitControls(camera);

orbitControls.enabled = false;

var sphereData;
var clock = new THREE.Clock();

const buttons = new THREE.Group();
const mapG = new THREE.Group();


function setScene(scene) {
  scene.background = new THREE.Color(0xffffff);
}
function setCamera(camera, scene) {
  camera.target = new THREE.Vector3(0, 0, 0);
  //last one is fov
  camera.position.set(0, 40, 0);
  scene.add(camera);
}
function setRenderer(renderer) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  document.body.appendChild(renderer.domElement);
}
function setMapControls(mapControls) {
  //controls
  mapControls.dampingFactor = 0.25;
  mapControls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  mapControls.screenSpacePanning = false;
  mapControls.minDistance = 70;
  mapControls.maxDistance = 100;
  mapControls.minPolarAngle = Math.PI / 8;
  mapControls.maxPolarAngle = Math.PI / 3;
}
/*
TODO
CHANGE LIGHT
Raycaster
add sphere video construtor
*/


class Scene {
  constructor() {
    this.scene = null;
    setScene(scene);
    setCamera(camera, scene);
    setRenderer(renderer);
    setMapControls(mapControls);
    }
  createVideoScene(scene, video) {
    this.scene = scene;
    this.video = video;
          mapControls.enabled = false;
    //controls.enabled = false;
    let sphere = {
        geometry: new THREE.SphereGeometry(-20, 20, 20),
        material: new THREE.MeshNormalMaterial()
    }
    var videoMesh = new THREE.Mesh(sphere.geometry, sphere.material);


    videoMesh.position.set(camera.position.x + 5, camera.position.y, camera.position.z);
    videoControls();
    this.scene.add(videoMesh);
  }
  createMapScene(scene) {

    this.scene = scene;
    loadMap();
    addLight();
    createButton();
  }
  mapOff() {
    mapG.visible = false;
    buttons.visible = false;
  }
}


init();
animate();

function videoControls() {

  orbitControls.enabled = true;
  orbitControls.target.set(camera.position.x + 5, camera.position.y, camera.position.z);
  orbitControls.enablePan = false;
  orbitControls.enableZoom = false;
  /*
  controls.enableRotate = false;
  controls.enablePan = false;
  controls.enableZoom = false;
  */
}

function addLight() {
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
}

function loadMap() {
    const mapLoader = new THREE.GLTF2Loader();
    const mapDir = "3d/crespi3d.gltf";
    mapLoader.allowCrossOrigin = true;
    mapLoader.load(mapDir, function(data) {
        gltf = data;
        mapG.add(gltf.scene);
        gltf.animations;
        gltf.scene;
        gltf.cameras;
        gltf.asset;
    });
    //true = map visible
    mapG.layer = "mapScene";
    scene.add(mapG);
    //object.layers.set("map");
}

function createButton() {
  let sTmp;
    sphereData = [{
          x: 50,
          y: 20,
          z: 0,
          id: "uno",
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
      }
  ];

  let sphere = {
      geometry: new THREE.SphereGeometry(10, 2, 100),
      material: new THREE.MeshNormalMaterial()
  }
  //spheredata.lenght determinates sphere quantity
  for (let i = 0; i < sphereData.length; i++) {
      sTmp = new THREE.Mesh(sphere.geometry, sphere.material);
      sTmp.position.x = sphereData[i].x;
      sTmp.position.y = sphereData[i].y;
      sTmp.position.z = sphereData[i].z;
      sTmp.name = sphereData[i].id;
      sTmp.scale = 0.5;
      buttons.add(sTmp);
  }
  buttons.layer = "mapScene";
  scene.add(buttons);
}

var sceneC = new Scene();
sceneC.createMapScene(scene);

function init() {

    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("click", onClick, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function onClick(e) {
    var mouse = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
    );
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(buttons.children);
    //if raycaster detects sth
    if(intersects.length == 1) {
        console.log(intersects);
          if (intersects[0].object.name == sphereData[0].id) {
            sceneC.mapOff();
            sceneC.createVideoScene(scene);
            //sceneC = new Scene();
            //sceneC.createVideoScene(scene);
            //constructor(sphereData);
        }
    }


}


function animate() {
    mapControls.update(clock.getDelta());
    renderer.render(scene, camera);
    //renderer.render(scene, video.camera);
    requestAnimationFrame(animate);
    //    console.log(space.camera.position);
}
