const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
}

exports.loadJavascript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.app,
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
})