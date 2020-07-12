var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['*', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
