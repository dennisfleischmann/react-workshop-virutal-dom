const path = require('path');

module.exports = {
   context: path.resolve(__dirname, './'),
  entry: {
    virtualdom: './src/virtual-dom.js'
  },
  output: {
    filename: './dist/bundle.js'
  }
};