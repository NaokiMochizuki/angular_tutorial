module.exports = {
  context: __dirname,

  entry: {
    after_bundle: "./app.js",
  },

  output: {
    path: __dirname,
    filename: "./bundle.js"
  },

  module: {
    loaders:[
      {
        test: /\.js$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }
    ]
  }

};
