const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:{
    bundle1: path.resolve(__dirname, 'src/index.js'),
    bundle2: path.resolve(__dirname, 'src/single-post-full-width.js'),
    bundle3: path.resolve(__dirname, 'src/singlePostSidebar.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true, 
    assetModuleFilename: '[name][ext]'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 8000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: "html-loader",

      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Test task",
      inject: true,
      filename: 'index.html',
      template: 'src/index.ejs',
    }),
    new HtmlWebpackPlugin({ 
      title: 'Test task',
      inject: true,
      filename: 'single-post-full-width.html',
      template: 'src/single-post-full-width.ejs',
    }),
    new HtmlWebpackPlugin({ 
      title: 'Test task',
      inject: true,
      filename: 'single-post-sidebar.html',
      template: 'src/single-post-sidebar.ejs',
    })
  ]
}