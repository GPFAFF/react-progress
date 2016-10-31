var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: { 
    path: __dirname + '/dist', 
    filename: 'index_bundle.js'
  },
 /* plugins : [
    new AppCachePlugin({
      template: './public/index.html',
      inject: true
    })
    //new wepack.optimize.UglifyJsPlugin();
  ]*/
};
