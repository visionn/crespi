import React, {Component} from 'react';
class Video extends Component {
  constructor(props) {
    super(props);
    this.app = this.props.this;
    this.video;
  }
  componentDidMount = () => {
    let sphere = {
      geometry: new THREE.SphereGeometry(-20, 20, 20),
      material: new THREE.MeshNormalMaterial()
    };
    this.video = new THREE.Mesh(sphere.geometry, sphere.material);
    // videosphere and exit spawns in your position
    this.video.position.set(
      this.app.camera.position.x + 5,
      this.app.camera.position.y,
      this.app.camera.position.z
    );
    // asignign name to this.video.name
    this.video.name = 'video';
    // setting type of controls on
    this.app.scene.add(this.video);
  }
  componentWillUnmount = () => {
    let picker = this.app.scene.getObjectByName(this.video.name);
    this.app.scene.remove(picker);
    this.app.animate();
  }
  render() {
    return(
     <div>
       <h1>MOUNTED</h1>
       <button onClick={this.componentWillUnmount}>X</button>
       <div ref={el => (this.videoContainer = el)} />
     </div>
  );
  }
}
export default Video;
