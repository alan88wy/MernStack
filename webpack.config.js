var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
