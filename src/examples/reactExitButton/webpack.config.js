const PATH = require('path');

module.exports = {
  entry: {
    app: './src/button.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: PATH.resolve(__dirname, './src/min/'),
    filename: 'button.min.js',
    chunkFilename: '[id].[hash:8].js'
  },
  module: {
    rules: [{
      exclude: '/node-modules/',
      use: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  watch: true
}
