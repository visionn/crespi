var space = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
  renderer: new THREE.WebGLRenderer({antialias: true}),
  light: new THREE.AmbientLight(0xffffff)
}
var controls,
    sphereData,
    saveCameraPosition,
    sphereArray = [],
    mouseVector = new THREE.Vector3(),
    clock = new THREE.Clock(),
    diamondTexture;
const button = new THREE.Group();
init();
animate();
/*
TODO
CHANGE LIGHT
Raycaster
add sphere video construtor
*/
class sphereVideo {
  constructor() {
    this.video = sphereData.video;
  }
}

function initializingSpace() {

    space.renderer.setSize(window.innerWidth, window.innerHeight);
    space.renderer.setPixelRatio(devicePixelRatio);
    document.body.appendChild(space.renderer.domElement);

    space.scene.background = new THREE.Color(0xffffff);

    space.camera.target = new THREE.Vector3(0, 0, 0);
    //last one is fov
    space.camera.position.set(0, 40, 0);

    space.scene.add(space.camera);
    //controls
    controls = new THREE.MapControls(space.camera, space.renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 70;
    controls.maxDistance = 100;
    controls.minPolarAngle = Math.PI / 8;
    controls.maxPolarAngle = Math.PI / 3;

    space.scene.add(space.light);
}

function loadMap() {
    const mapLoader = new THREE.GLTF2Loader();
    const mapDir = "3d/crespi3d.gltf";
    mapLoader.allowCrossOrigin = true;
    mapLoader.load(mapDir, function(data) {
        gltf = data;
        space.scene.add(gltf.scene);
        gltf.animations;
        gltf.scene;
        gltf.cameras;
        gltf.asset;
    });
}

function createButton() {
/*
    sphereData = new Array();
    function loadArray() {
      $.getJSON("js/spheredata.json", function(data) {
        sphereData = data.spheres;
        console.log("json loaded");
      }).error(function() {
        console.log("spheredata.json not loaded");
      });
    }
*/
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

  var sphere = {
      geometry: new THREE.SphereGeometry(10, 2, 100),
      material: new THREE.MeshNormalMaterial()
  }
    //spheredata.lenght determinates sphere quantity
    for (var i = 0; i < sphereData.length; i++) {
        sphereArray[i] = new THREE.Mesh(sphere.geometry, sphere.material);
        sphereArray[i].position.x = sphereData[i].x;
        sphereArray[i].position.y = sphereData[i].y;
        sphereArray[i].position.z = sphereData[i].z;
        sphereArray[i].name = sphereData[i].id;
        sphereArray[i].scale = 0.5;
        button.add(sphereArray[i]);
    }

    space.scene.add(button);
}

function init() {
    initializingSpace();
    loadMap();
    createButton();
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
    raycaster.setFromCamera(mouse, space.camera);

    var intersects = raycaster.intersectObjects(button.children);
    //if raycaster detects sth
    if(intersects.length == 1) {
        console.log(intersects);
          if (intersects.object.name == sphereData.id) {
            console.log("sphere" + i + "tapped");
            //constructor(sphereData);
        }
    }


}


function animate() {
    controls.update(clock.getDelta());
    space.renderer.render(space.scene, space.camera);
    requestAnimationFrame(animate);
    //    console.log(space.camera.position);
}
