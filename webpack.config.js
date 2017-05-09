const path = require('path');

module.exports = {
   context: path.resolve(__dirname, './'),
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: './dist/bundle.js'
  }
};