const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');



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
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      title: 'Webpack-输出管理'
    }),
    // new CopyWebpackPlugin([
    //   { from: './renderer.js', to: './js' },
    // ]),
  ],
};