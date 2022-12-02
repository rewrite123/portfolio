const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV||'development',
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|svg|png|webp|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
    ]
  },
  devtool: process.env.NODE_ENV=='production' ? undefined : 'source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ]
    }),
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    //   inject: true
    // }),
    new MiniCssExtractPlugin(),
  ],
};