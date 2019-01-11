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

// Settings
const mode = 'static'; // ci, laravel, shop, static
const launchDev = true;
const isDev = (process.env.NODE_ENV === 'development');
const isLaravel = mode === 'shop' || mode === 'laravel';
const isCi = mode === 'ci';
const isShop = mode === 'shop';
const isFramework = isLaravel || isCi;

// function resolve(dir) {
//   return path.join(__dirname, '..', dir);
// }

// Paths
const basePath = process.cwd();

const paths = {
  root: '',
};

paths.resources = `${paths.root}resources/`;
paths.assets = `${paths.resources}assets/`;
paths.nunjucks = `${paths.resources}nunjucks/`;
paths.sass = `${paths.assets}sass/`;
paths.js = `${paths.assets}js/`;
paths.images = `${paths.assets}images/`;
paths.fonts = `${paths.assets}fonts/`;

if (isShop) {
  paths.sass = `${paths.sass}client/`;
  paths.js = `${paths.js}client/`;
}

const dist = {
  base: `${paths.root}static/`,
  assets: 'assets/',
  revManifest: '',
};

if (isLaravel) dist.base = `${paths.root}public/`;
if (isCi) dist.base = `${paths.root}assets/`;
if (isFramework) dist.assets = 'build/';

dist.css = `${dist.assets}css/`;
dist.js = `${dist.assets}js/`;
dist.images = `${dist.assets}images/`;
dist.fonts = `${dist.assets}fonts/`;


const nunjucksOptions = JSON.stringify({
  searchPaths: path.join(basePath, paths.nunjucks),
});

const pages = glob.sync('**/*.nunjucks', {
  cwd: path.join(basePath, `${paths.nunjucks}/pages/`),
  root: '/',
}).map(page => new HtmlWebpackPlugin({
  filename: page.replace('nunjucks', 'html'),
  template: `${paths.nunjucks}/pages/${page}`,
}));


module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      `./${paths.js}esign.js`,
      `./${paths.sass}style.scss`,
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
              name: (isDev) ? `${dist.images}[name].[ext]` : `${dist.images}[name].[hash:8].[ext]`,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(basePath, `${dist.base}`),
    filename: `${dist.js}app.[hash:8].js`,
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
      filename: `${dist.css}style.[chunkhash:8].css`,
    }),
    new CopyWebpackPlugin([
      { from: `./${paths.fonts}`, to: (isDev) ? `${dist.fonts}[name].[ext]` : `${dist.fonts}[name].[hash:8].[ext]` },
      { from: `./${paths.images}`, to: (isDev) ? `${dist.images}[name].[ext]` : `${dist.images}[name].[hash:8].[ext]` },
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
      fileName: `${dist.revManifest}rev-manifest.json`,
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: `${basePath}/${dist.base}`,
    open: launchDev,
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
    new CleanWebpackPlugin([
      path.join(dist.base, dist.assets),
    ]),
  );
}
