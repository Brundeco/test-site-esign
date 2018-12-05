require('babel-polyfill');

// const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// function resolve(dir) {
//   return path.join(__dirname, '..', dir);
// }

const isDev = (process.env.NODE_ENV === 'development');
const basePath = process.cwd();

const nunjucksOptions = JSON.stringify({
  searchPaths: `${basePath}/resources/nunjucks/`,
});

const pages = glob.sync('**/*.nunjucks', {
  cwd: path.join(basePath, 'resources/nunjucks/pages/'),
  root: '/',
}).map(page => new HtmlWebpackPlugin({
  filename: page.replace('nunjucks', 'html'),
  template: `resources/nunjucks/pages/${page}`,
}));

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './resources/assets/js/esign.js',
      './resources/assets/sass/style.scss',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(njk|nunjucks)$/,
        loader: ['html-loader', `nunjucks-html-loader?${nunjucksOptions}`],
      },
      {
        test: /\.(jpe?g|png|svg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]', // (isDev) ? '[name].[ext]' : 'assets/images/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  output: {
    path: `${basePath}/static/`,
    filename: 'assets/js/app.[hash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    namedChunks: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    ...pages,
    new StyleLintPlugin({ syntax: 'scss' }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.[chunkhash].css',
    }),
    new ManifestPlugin({
      fileName: 'rev-manifest.json',
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: `${basePath}/static`,
    // open: true,
    watchContentBase: true,
  },
};

if (!isDev) {
  module.exports.plugins.push(
    // new CleanWebpackPlugin(['static/']),
  );
}
