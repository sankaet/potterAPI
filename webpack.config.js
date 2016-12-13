const path = require('path');

const config = {
  // This is the path to your client-side JavaScript folder, this must be an absolute path
  context: path.join(__dirname, 'client'),
  // This is the entry point for your application
  entry: [
    '../client/app/index.js',
  ],
  output: {
    path: path.join(__dirname, './client/public'),
    filename: 'bundle.js',
  },
  // Specifies how each file should be processed before it is combined into your bundle
  // Babel converts your ES6 + JSX JavaScript into ES5 before merging it into your bundle
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  // Where Webpack should look for loaders, like the Babel loader mentioned above
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  // Where Webpack should look for files referenced by an import or require() statement
  // This makes it so that you can import npm packages in your code
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  }
};

module.exports = config;
