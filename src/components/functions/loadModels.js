import { config } from '../../configuration/config';
export const loadModels = async (scene, elements) => {
  const MAP_LOADER = new THREE.GLTFLoader();
  // takes the keys of config and loads them into an array
  let keys = Object.getOwnPropertyNames(config);
  let counter = 0;
  for (let i of keys) {
    if (i !== 'info') {
      // requiring 3d objects files using jsonloader
      import(`../../assets/3d/${i}.gltf`).then(object => {
        // parsing previously loaded json file
        MAP_LOADER.parse(object.default, './', gltf => {
          if (i === 'centro') {
            // setting object position
            gltf.scene.position.set(0, 0, 0);
          } else {
            gltf.scene.position.set(
              10 * Math.sin(5 * counter),
              0,
              10 * Math.cos(5 * counter),
            );
            elements[i] = {
              text: {
                ...elements[i].text
              },
              position: {
                x: 10 * Math.sin(5 * counter),
                y: 0,
                z: 10 * Math.cos(5 * counter),
              } 
            };
            counter++;
          }
          // setting scene name
          gltf.scene.name = i;
          gltf.scene.children[0].name = i;
          gltf.scene.name = i;
          // adding model to scene
          scene.add(gltf.scene);
          // pushing model to dedicate array
          elements.push(gltf.scene);
        });
      });
    } else {
    }
  }
};
