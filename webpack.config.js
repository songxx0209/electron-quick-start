const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    app: './src/index.tsx'
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
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
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