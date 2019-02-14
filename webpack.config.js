const PATH = require('path');
const WEBPACK = require('webpack');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const PROGRESS_BAR = require('simple-progress-webpack-plugin');

module.exports = {
  //setting entry app.js
  //note: every entry must be in directory src to work with webpack
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    //defining output file
    pathinfo: false,
    path: PATH.resolve(__dirname, './build/'),
    filename: 'crespi.min.js',
    chunkFilename: '[id].[hash].js',
  },
  resolve: {
    //loading THREE dependencies
    alias: {
      'three-orbitcontrols': PATH.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
      'three-transformcontrols': PATH.join(__dirname, 'node_modules/three/examples/js/controls/TransformControls.js'),
      'three-orientation-controls': PATH.join(__dirname, 'node_modules/three/examples/js/controls/DeviceOrientationControls.js'),
      'three-gltfloader': PATH.join(__dirname, 'node_modules/three/examples/js/loaders/GLTFLoader.js')
    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    //fetching THREE lib
    new WEBPACK.ProvidePlugin({
      THREE: 'three'
    }),
    new HTML_WEBPACK_PLUGIN({
      template: PATH.join(__dirname, './src/index.html'),
      inject: false,
      filename: 'index.html',
      favicon: './src/assets/favicon.ico'
    }),
    new PROGRESS_BAR({
      format: 'minimal',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader?cacheDirectory',
      }, {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {minimize: true},
        }]
      }, {
        test: /\.(md|gltf)$/,
        use: 'raw-loader',
      },
    ]
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: PATH.join(__dirname, 'src'),
    // listening on port 8080
    port: 3000,
    // host = pc ip address. to access server type pc ip address
    host: 'localhost',
  },
  cache: false
};
