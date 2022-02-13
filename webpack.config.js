const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getModule = require('./webpack.module');
const getDevServer = require('./webpack.dev-server');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    app: path.resolve('src', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: env.production ? 'js/[chunkhash:6].[name].js' : 'js/[name].js',
    chunkFilename: env.production ? 'js/[chunkhash:6].[name].js' : 'js/[name].js',
    publicPath: '/',
  },
  module: getModule(),
  devServer: getDevServer(),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
  ],
});
