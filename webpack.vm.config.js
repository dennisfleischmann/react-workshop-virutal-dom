const path = require('path');

module.exports = {
   context: path.resolve(__dirname, './'),
  entry: {
    virtualdom: './src/virtual-dom.js'
  },
  devtool: 'source-map',
  output: {
    filename: './dist/bundle.js'
  }
};