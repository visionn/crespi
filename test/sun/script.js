var space = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
  renderer: new THREE.WebGLRenderer({antialias: true}),
  sun: new THREE.PointLight(0xFFCEf7, 0 , 100),
  sphere: new THREE.SphereGeometry(15, 480, 400),
  dayLight: new THREE.DirectionalLight( 0xFFCB37, 1 )
}

var controls,
    sphereData,
    saveCameraPosition,
    sphereArray = [],
    mouseVector = new THREE.Vector3(),
    clock = new THREE.Clock(),
    diamondTexture,
    lampData = [],
    lampArray = [],
    lum;
const button = new THREE.Group();

/*
TODO
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
    space.renderer.shadowMap.enabled = true;
    space.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(space.renderer.domElement);

    space.scene.background = new THREE.Color(0xffffff);
    space.camera.target = new THREE.Vector3(0, 100, 0);
    space.camera.position.set(0, 300, 0);

    space.scene.add(space.camera);

    //controls
    controls = new THREE.MapControls(space.camera, space.renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 1200;
    controls.minPolarAngle = Math.PI / 11;
    controls.maxPolarAngle = Math.PI / 3;

    space.scene.add(space.sun);

    console.log(controls);

      // --- SUN ---  //

    space.sun.add(new THREE.Mesh(space.sphere, new THREE.MeshBasicMaterial({color: 0xFFCB37})));
    space.sun.position.set(-10, 10, 0);
    space.sun.castShadow = true;
    space.scene.add(space.sun);

      // ---dayLight--- //

//		space.dayLight.position.set( -1, 1.75, 1 );
//		space.dayLight.position.multiplyScalar( 30 );
//		space.dayLight.castShadow = true;
//	  space.dayLight.shadow.mapSize.width = 2048;
//		space.dayLight.shadow.mapSize.height = 2048;

//    space.scene.add( space.dayLight );

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
  lampData = [{

      x: 100,
      y: 20,
      z: 100,
      id: "fabbrica1"
    },
    {

        x: 200,
        y: 20,
        z: 100,
        id: "fabbrica2"
      },


  ];

  sphereData = [{
          x: 100,
          y: 20,
          z: 20,
          id: "uno",
          video: ""
      },
      {
          x: 100,
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

  var sphere = { geometry: new THREE.SphereGeometry(10, 2, 100), material: new THREE.MeshNormalMaterial() }

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

  var lamp = new THREE.PointLight(0xEEEEFF, 1000 , 100);
  var lampGeometry = {geometry: new THREE.SphereGeometry(1,2,3), material: new THREE.MeshBasicMaterial({color: 0XFFFFFF})}

        for(var i = 0;i < 2; i++) {
          lampArray[i] = new THREE.Mesh(lampGeometry.geometry, lampGeometry.material);
          lampArray[i].position.x = lampData[i].x;
          lampArray[i].position.y = lampData[i].y;
          lampArray[i].position.z = lampData[i].z;
          lampArray[i].name = lampData[i].id;
          lamp.add(lampArray[i]);

        }

console.log(lamp);

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

    var time = Date.now() * 0.001;
    space.sun.position.x = Math.sin(time * 0.5) * 450;
    space.sun.position.y = Math.cos(time * 0.5) * 200;
    space.sun.position.z = Math.cos(time * 0) * 100;

//    space.dayLight.position.x = Math.sin(time * 0.5) * 450;
//    space.dayLight.position.y = Math.cos(time * 0.5) * 200;
//    space.dayLight.position.z = Math.cos(time * 0) * 100;

    lum = Math.sin(time)*100;
}

init();
animate();
