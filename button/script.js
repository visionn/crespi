var renderer,
    scene,
    camera,
    controls,
    group,
    raycaster = new THREE.Raycaster(),
    mouseVector = new THREE.Vector3(),
    diamondButton,
    diamondTexture;
init();
animate();

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

  controls = new THREE.OrbitControls(camera);



  var light = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 0, 50, 15 );
  light.castShadow = true;
  light.shadow.mapSize.width = 100000;  // default
  light.shadow.mapSize.height = 100000; // default
  light.shadow.camera.near = 0.5;       // default
  light.shadow.camera.far = 500;      // default
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

var geometry = new THREE.SphereGeometry( 10, 2, 100 );
var material = new THREE.MeshNormalMaterial( );
diamondButton =  new THREE.Mesh( geometry, material );
scene.add( doamondButton );


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}
