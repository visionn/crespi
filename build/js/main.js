var space = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
  renderer: new THREE.WebGLRenderer({antialias: true}),
  light: new THREE.AmbientLight(0xffffff)
}
var controls,
    sphereData,
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
*/
function initializingSpace() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
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
    //controls
    controls = new THREE.MapControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 70;
    controls.maxDistance = 100;
    controls.minPolarAngle = Math.PI / 8;
    controls.maxPolarAngle = Math.PI / 3;
    var light = new THREE.AmbientLight(0xffffff);
    button.add(light);
}

function loadMap() {
    const mapLoader = new THREE.GLTF2Loader();
    const mapDir = "crespi3d.gltf";
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
    //add coordinates if you need to create a new sphere
    sphereData = [{
            x: 50,
            y: 20,
            z: 0,
            id: "uno"
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
        material: new THREE.MeshNormalMaterial(),
    }

    for (var i = 0; i < sphereData.length; i++) {
        sphereArray[i] = new THREE.Mesh(sphere.geometry, sphere.material);
        sphereArray[i].position.x = sphereData[i].x;
        sphereArray[i].position.y = sphereData[i].y;
        sphereArray[i].position.z = sphereData[i].z;
        sphereArray[i].name = sphereData[i].id;
        sphereArray[i].scale = 0.5;
        console.log(sphereArray[i]);
        button.add(sphereArray[i]);
    }

    scene.add(button);
}

function init() {
    initializingSpace();
    loadMap();
    createButton();
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener("click", onClick, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
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
    if (intersects.length > 0) {
        console.log(intersects);
        //id = uno
        if (intersects[0].object.name == sphereData[0].id) {
            console.log("sphere0");
        }
    }


}


function animate() {
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
