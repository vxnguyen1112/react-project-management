const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/utils/index.js'),
  output: {
    filename: "main.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { name: '[name]-[hash].[ext]', limit: 10000 },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name]-[hash].[ext]' },
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.css'],
  },
};