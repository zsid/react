const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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

exports.loadImages = () => ({
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include,
        exclude,

        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.extractBundles = bundles => ({
  plugins: bundles.map(
    bundle => new webpack.optimize.CommonsChunkPlugin(bundle)
  ),
});

exports.extractSCSS = () => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: plugin.extract({
            fallback: 'style-loader',
            use: [
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
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};
