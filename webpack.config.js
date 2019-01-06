const path = require('path');
const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: "js/bundle.js",
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};