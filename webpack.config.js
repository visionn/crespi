const path = require('path');
const webpack = require('webpack');

module.exports = {
  //setting entry app.js
  //note: every entry must be in directory src to work with webpack
  entry: './src/build/dev/app.js',
  output: {
   //defining output file
   path: path.resolve(__dirname, './src/build/min/'),
   filename: 'crespi.min.js'
 },
  resolve: {
   //loading THREE dependencies
   alias: {
     'three-mapcontrols': path.join(__dirname, 'node_modules/three/examples/js/controls/MapControls.js'),
     'three-orbitcontrols': path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
     'three-gltfloader': path.join(__dirname, 'node_modules/three/examples/js/loaders/GLTFLoader.js')
   }
 },
   plugins:[
     //fetching THREE lib
     new webpack.ProvidePlugin({
       'THREE': 'three'
     })
   ],
   //if true autoupdates changes after first build
   watch: true
};
