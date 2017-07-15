const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

// Webpack parts
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  appHTML: `${path.join(__dirname, 'public')}/index.html`,
};

const commonConfig = merge([
  {
    entry: PATHS.app,
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.appHTML,
        inject: true,
      }),
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    // Turn off performance hints during development because we don't do any
    // splitting or minification in interest of speed. These warnings become
    // cumbersome.
    performance: {
      hints: false,
    },
  },
  parts.loadJavascript(),
  parts.lintJavascript(),
  parts.loadImages(),
  parts.loadFonts({
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),
]);

const developmentConfig = merge([
  parts.devServer(),
  parts.generateSourceMaps({ type: 'cheap-module-source-map' }),
  parts.loadCSS(),
]);


const productionConfig = merge([
  {
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js',
    },
    recordsPath: path.join(__dirname, 'records.json'),
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
  },
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true,
    },
  }),
  parts.extractSCSS(),
  parts.attachRevision(),
  parts.clean(),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
