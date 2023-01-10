const path = require('path');
const apiMocker = require('connect-api-mocker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/main.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
  ],
  mode: 'none',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    client: {
      overlay: true,
    },
    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.use(apiMocker('/api', 'src/api'));
    },
    proxy: {
      '/api/': { target: 'http://127.0.0.1:3000', changeOrigin: true },
    },
    compress: true,
    port: 3000,
    host: '127.0.0.1',
    historyApiFallback: true,
  },
};
