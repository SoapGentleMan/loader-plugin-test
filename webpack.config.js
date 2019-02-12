const path = require('path');
const webpack = require('webpack');
const MyPlugin = require('./plugin.js')

module.exports = function makeWebpackConfig() {
  let config = {};

  config.mode = 'development';

  config.resolve = {
    modules: ['node_modules'],
    extensions: ['.vue', '.ts', '.js']
  };

  config.entry = {
    main: './index.js'
  };

  config.output = {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };

  config.devtool = 'inline-source-map';

  config.module = {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: './loader.js',
          options: {
            name: 'ww'
          }
        },
        exclude: /node_modules/
      }
    ]
  };

  config.externals = {};

  config.plugins = [];

  config.plugins.push(
    new MyPlugin({abc: 1})
  );

  return config;
};
