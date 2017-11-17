var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./public_html/src/js/j29-scripts.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude(file) {
            if (file.startsWith(__dirname + '/node_modules/j29-library')) {
                return false;
            }

            return file.startsWith(__dirname + '/node_modules');
        },
        use: {
            loader: 'babel-loader'
        }
      },
    ]
  },
  output: {
    path: __dirname + '/public_html/dist/',
    filename: debug ? "j29-scripts.js" : "j29-scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ 
        mangle: true, 
        sourcemap: false,
        compress: { warnings: false },
        comments: false,
    }),
  ],
};
