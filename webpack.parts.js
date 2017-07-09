const path = require('path');
const autoprefixer = require('autoprefixer');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

exports.devServer = () => ({
  devServer: {
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});

exports.loadJavascript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.app,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
    ],
  },
});

exports.lintJavascript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              localIdentName: '[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
              minimize: true,
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});
