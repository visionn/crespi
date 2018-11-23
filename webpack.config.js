const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
  //setting entry app.js
  //note: every entry must be in directory src to work with webpack
  entry: {
    app: './src/build/js/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    //defining output file
    pathinfo: false,
    path: PATH.resolve(__dirname, './src/build/min/'),
    filename: 'crespi.min.js',
    chunkFilename: '[id].[hash:8].js'
  },
  resolve: {
   //loading THREE dependencies
    alias: {
      'three-mapcontrols': PATH.join(__dirname, 'node_modules/three/examples/js/controls/MapControls.js'),
      'three-orbitcontrols': PATH.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
      'three-gltfloader': PATH.join(__dirname, 'node_modules/three/examples/js/loaders/GLTFLoader.js')
    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins:[
    //fetching THREE lib
    new WEBPACK.ProvidePlugin({
      'THREE': 'three'
    })
  ],
  module: {
    rules: [{
      exclude: '/node_modules/',
      use: 'babel-loader'
    }]
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
   //if true autoupdates changes after first build
   watch: true
};
