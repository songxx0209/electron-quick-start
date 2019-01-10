const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: "js/bundle.js",
    path: DIST_PATH
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot:true,
    port: 8080,
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
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      title: 'Webpack-输出管理'
    }),
  ],
};