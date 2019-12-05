const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/app/app.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([
    { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
  new HtmlWebpackPlugin({
    template: Path.resolve(__dirname, '../src/index.html')
  })
  ],
  resolve: {
    extensions: [ '.js', '.json', '.scss', '.css', '.html' ],
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      '@Core': Path.resolve(__dirname, '../src/core/'),
      '@Components': Path.resolve(__dirname, '../src/app/components/')
    }
  },
  module: {
    rules: [
    {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }
    }
    ]
  }
};
