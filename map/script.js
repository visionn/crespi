var renderer,
    scene,
    camera,
    controls,
    group,
    raycaster = new THREE.Raycaster(),
    mouseVector = new THREE.Vector3(),
    diamondButton,
    clock = new THREE.Clock(),
    diamondTexture;
init();
animate();
/*
TODO
CHANGE LIGHT
Block texture penetration
*/
function initializingSpace() {
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.target = new THREE.Vector3(0, 0, 0);
  //last one is fov
  camera.position.set(0, 40, 0);
  scene.add(camera);

  controls = new THREE.FirstPersonControls(camera);
  controls.movementSpeed = 100;
  controls.lookSpeed = 0.125;
  controls.lookVertical = true;


  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);
}

function loadMap(){
  const mapLoader = new THREE.GLTF2Loader();
  const mapDir = "3d/crespi3d.gltf";
  mapLoader.load(mapDir, function(data) {
    gltf = data;
    scene.add(gltf.scene);
    gltf.animations;
    gltf.scene;
    gltf.cameras;
    gltf.asset;
  });

}

function init() {
  initializingSpace();
  loadMap();
  group = new THREE.Group();
  scene.add(group);


}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
  controls.handleResize();
}


function animate() {
  controls.update( clock.getDelta() );
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}
