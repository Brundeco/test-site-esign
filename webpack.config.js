require('@babel/polyfill');

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminPngquant = require('imagemin-pngquant');
const imageminOptipng = require('imagemin-optipng');
const imageminZopfli = require('imagemin-zopfli');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
      '@babel/polyfill',
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
        test: require.resolve('jquery'), // expose jQuery globally
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery',
          },
          {
            loader: 'expose-loader',
            options: '$',
          },
        ],
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
              url: true,
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? 'assets/images/[name].[ext]' : 'assets/images/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: `${basePath}/static/`,
    filename: 'assets/js/app.[hash:8].js',
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new StyleLintPlugin({ syntax: 'scss' }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.[chunkhash:8].css',
    }),
    new CopyWebpackPlugin([
      { from: './resources/assets/fonts', to: 'assets/fonts/[name].[hash:8].[ext]' },
      { from: './resources/assets/images', to: 'assets/images/[name].[hash:8].[ext]' },
    ]),
    new ImageminPlugin({
      disable: isDev,
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminPngquant({
          strip: true,
        }),
        imageminOptipng({
          optimizationLevel: 5,
        }),
        imageminZopfli({
          more: true,
        }),
        imageminJpegRecompress({
          accurate: true,
          quality: 'low',
          min: 45,
          max: 85,
          strip: true,
        }),
        imageminMozjpeg({
          progressive: true,
          quality: 80,
        }),
        imageminGifsicle({
          interlaced: true,
          optimizationLevel: 3,
        }),
        imageminSvgo({
          removeViewBox: false,
        }),
      ],
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
    stats: {
      children: false, // Suppress "Entrypoint undefined" warnings
    },
  },
  stats: {
    children: false, // Suppress "Entrypoint undefined" warnings
  },
};

if (!isDev) {
  module.exports.plugins.push(
    new CleanWebpackPlugin(['static/assets/']),
  );
}
