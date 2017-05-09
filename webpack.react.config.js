const path = require('path');

module.exports = {
   context: path.resolve(__dirname, './'),
  entry: {
    reactcycle: './src/react-cycle.js'
  },
  output: {
    filename: './dist/bundle.js'
  }
};