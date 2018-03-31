/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
//   module: {
//     rules: [
//       { test: /\.css$/,
//         use: [
//           { loader: "style-loader" },
//           { loader: "css-loader" }
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//         // query: {
//         //   presets: ['react', 'es2015']
//         // }
//       }, {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//         // query: {
//         //   presets: ['react', 'es2015']
//         // }
//       }
//     ]
//   }
// }
