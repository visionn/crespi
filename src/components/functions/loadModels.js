import { config } from '../../configuration/config';
export const loadModels = (scene, elements) => {
  const MAP_LOADER = new THREE.GLTFLoader();
  // takes the keys of config and loads them into an array
  let keys = Object.getOwnPropertyNames(config);
  for (let i of keys) {
    if (i !== 'info') {
      // requiring 3d objects files using jsonloader
      let mystery = require(`../../assets/3d/${i}.gltf`);
      // parsing previously loaded json file
      MAP_LOADER.parse(mystery, './', gltf => {
        // setting object position
        gltf.scene.position.set(
          config[i].position.x,
          config[i].position.y,
          config[i].position.z,
        );
        // setting scene name
        gltf.scene.name = i;
        gltf.scene.children[0].name = i;
        gltf.scene.name = i;
        gltf.scene.rotation.y = Math.PI / 2;
        // adding model to scene
        scene.add(gltf.scene);
        // pushing model to dedicate array
        elements.push(gltf.scene);
      });
    } else {
    }
  }
};
