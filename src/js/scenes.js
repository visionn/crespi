class Scene extends Component {
  constructor(props) {
    super (props);
  }
  render = () => {
    return(

    );
  }
  onComponentDidMount = () => {
   let tmp;
   // button dimentions
   let sphere = {
     geometry: new THREE.SphereGeometry(10, 2, 100),
     material: new THREE.MeshNormalMaterial()
   }

   let controls = [null];
   let controlsTmp;
   //spheredata.lenght determinates sphere quantity
   for (let i = 0; i < this.sphereData.length; i++) {
     tmp = new THREE.Mesh(sphere.geometry, sphere.material);
     // setting positions
     tmp.position.x = this.sphereData[i].x;
     tmp.position.y = this.sphereData[i].y;
     tmp.position.z = this.sphereData[i].z;
     tmp.name = this.sphereData[i].id;
     // setting controls for each object
     controls.Tmp = new THREE.ObjectControls(
       this.camera,
       this.renderer.domElement,
       tmp
     );
     // pushing tmp to end of controls[]
     controls.push(tmp);
     // adding tm to this.buttonsGroup
     this.buttonsGroup.add(tmp);

   }
   this.scene.add(this.buttonsGroup);
  }
}
