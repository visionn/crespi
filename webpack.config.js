const PATH = require("path");
const WEBPACK = require("webpack");
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const PROGRESS_BAR = require("simple-progress-webpack-plugin");

module.exports = {
  //setting entry app.js
  //note: every entry must be in directory src to work with webpack
  entry: {
    main: "./src/index.js",
    app: ["./src/components/app.js", "./src/style/common.js"],
    description: ["./src/components/description.js", "./src/style/common.js"],
    dinamic: ["./src/components/dinamic.js", "./src/style/description.js"],
    info: ["./src/components/info.js", "./src/style/info.js"],
    scene: ["./src/components/scene.js", "./src/style/scene.js"],
    toast: ["./src/components/toast.js", "./src/style/toast.js"],
    configuration: "./src/configuration/config.js",

    vendor: ["react", "react-dom"]
  },
  output: {
    //defining output file
    pathinfo: false,
    path: PATH.resolve(__dirname, "./build/"),
    filename: "[name].min.js"
  },
  resolve: {
    //loading THREE dependencies
    alias: {
      "three-orbitcontrols": PATH.join(
        __dirname,
        "node_modules/three/examples/js/controls/OrbitControls.js"
      ),
      "three-orientation-controls": PATH.join(
        __dirname,
        "node_modules/three/examples/js/controls/DeviceOrientationControls.js"
      ),
      "three-gltfloader": PATH.join(
        __dirname,
        "node_modules/three/examples/js/loaders/GLTFLoader.js"
      )
    },
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    //fetching THREE lib
    new WEBPACK.ProvidePlugin({
      THREE: "three"
    }),
    new HTML_WEBPACK_PLUGIN({
      template: PATH.join(__dirname, "./src/index.html"),
      inject: true,
      filename: "index.html",
      hash: true,
      minify: true,
      favicon: "./src/assets/favicon.ico"
    }),
    new PROGRESS_BAR({
      format: "minimal"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: "babel-loader?cacheDirectory"
      },
      {
        test: /\.(md|gltf)$/,
        use: "raw-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: PATH.join(__dirname, "src"),
    // listening on port 8080
    port: 3000,
    // host = pc ip address. to access server type pc ip address
    host: "localhost"
  },
  cache: false
};
