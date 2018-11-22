import React, {Component} from 'react';

class App extends Component {
  componentDidMount() {
   const geometry = new THREE.SphereGeometry();
   const material = new THREE.MeshNormalMaterial({
   color: 0xff0000
   });

   const globe = new THREE.Mesh(geometry, material);
   scene.add(globe);
   }
  return() {
    render (
      <div
        ref={el => (this.worldContainer = el)}
      />
    );
  }
}
