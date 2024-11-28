const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this to your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // This ensures unique filenames
    clean: true // Cleans the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};