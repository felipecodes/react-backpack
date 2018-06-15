const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
/* eslint-enable import/no-extraneous-dependencies */
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    historyApiFallback: true,
    hot: true,
    after: (app) => {
      app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
          if (err) {
            res.status(500).send(err);
          }
        });
      });
    },
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
});
