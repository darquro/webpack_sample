const Webpack = require('webpack');
const path = require('path');

const MINIFY = process.env.NODE_MINIFY === '1';

module.exports = {
  context: path.join(__dirname, '/src/js'),
  entry: {
    webpack_sample: './main.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: MINIFY ? '[name].min.js' : '[name].js',
    publicPath: '/assets/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {},
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: MINIFY ? [
    new Webpack.optimize.UglifyJsPlugin(),
  ] : [],
  devServer: {
    contentBase: 'html',
    port: 8080,
  },
};
