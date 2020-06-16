const path = require('path')

module.exports = {
  // context: path.resolve(__dirname, 'packages'),
  mode: 'development',
  entry: ['./core/Native.js'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@packages': path.resolve(__dirname, './packages'),
      '@core': path.resolve(__dirname, './core')
    }
  }
}