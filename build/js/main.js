const scene = new THREE.Scene();
setScene(scene);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
setCamera(camera, scene);
const renderer = new THREE.WebGLRenderer({antialias: true});
setRenderer(renderer);
const controls = new THREE.MapControls(camera, renderer.domElement);
setControls(controls);
var sphereData;
var clock = new THREE.Clock();
const button = new THREE.Group();


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
function setControls(controls) {
  //controls
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.minDistance = 70;
  controls.maxDistance = 100;
  controls.minPolarAngle = Math.PI / 8;
  controls.maxPolarAngle = Math.PI / 3;
}
/*
TODO
CHANGE LIGHT
Raycaster
add sphere video construtor
*/


class Scene {
  constructor(scene) {
    this.scene = scene;
    }
  createVideoScene(video) {
    this.video = video;
    var videoMesh = new THREE.Mesh(videoSphere.geometry, videoSphere.material);
    this.scene.add(videoMesh);
  }
  createMapScene() {
    loadMap();
    createButton();
    addLight();
  }
}


init();
animate();

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
        scene.add(gltf.scene);
        gltf.animations;
        gltf.scene;
        gltf.cameras;
        gltf.asset;
    });
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
      button.add(sTmp);
  }

  scene.add(button);
}


function init() {
    var mapScene = new Scene(scene);
    mapScene.createMapScene();
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener("click", onClick, false);
}

function onWindowResize() {
    space.camera.aspect = window.innerWidth / window.innerHeight;
    space.renderer.setSize(window.innerWidth, window.innerHeight);
}


function onClick(e) {
    var mouse = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
    );
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(button.children);
    //if raycaster detects sth
    if(intersects.length == 1) {
        console.log(intersects);
          if (intersects[0].object.name == sphereData[0].id) {
            var tmp = new SphereVideo();
            tmp.createVideoSphere(sphereData[0].video);
            //constructor(sphereData);
        }
    }


}


function animate() {
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    //    console.log(space.camera.position);
}
