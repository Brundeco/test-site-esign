require('@babel/polyfill');

const webpack = require('webpack');
const path = require('path');
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
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const settings = require('./webpack.settings');

const {
  basePath,
  devServerContentBase,
  devServerOpenBrowser,
  isDev,
  isStatic,
  paths,
  dist,
  nunjucksOptions,
  pages,
  useFontsDirectory,
  useVideosDirectory,
} = settings;

const copy = [
  { from: `./${paths.images}`, to: (isDev) ? `${dist.images}[path][name].[ext]` : `${dist.images}[path][name].[hash:8].[ext]`, ignore: ['*.DS_Store'] },
  { from: `./${paths.manifest}`, to: `${dist.manifest}[name].[ext]` },
];

if (useFontsDirectory) {
  copy.push(
    { from: `./${paths.fonts}`, to: (isDev) ? `${dist.fonts}[path][name].[ext]` : `${dist.fonts}[path][name].[hash:8].[ext]`, ignore: ['*.DS_Store'] },
  );
}

if (useVideosDirectory) {
  copy.push(
    { from: `./${paths.videos}`, to: (isDev) ? `${dist.videos}[path][name].[ext]` : `${dist.videos}[path][name].[hash:8].[ext]`, ignore: ['*.DS_Store'] },
  );
}

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      `./${paths.js}app.js`,
      `./${paths.sass}style.scss`,
      `./${paths.svgSprite}sprite.js`,
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
        options: {
          presets: ['@babel/preset-env'],
        },
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
            options: {
              publicPath: '../../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: !isDev,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif|webp)$/,
        exclude: [
          path.resolve(__dirname, paths.svgSprite),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? `${dist.images}[name].[ext]` : `${dist.images}[name].[hash:8].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.*\.svg$/,
        include: [
          path.resolve(__dirname, paths.svgSprite),
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: `${dist.svgSprite}/icons.svg`,
              symbolId: filePath => `icon-${path.basename(filePath, '.svg')}`,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? `${dist.fonts}[name].[ext]` : `${dist.fonts}[name].[hash:8].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: (isDev) ? `${dist.videos}[path][name].[ext]` : `${dist.videos}[path][name].[hash:8].[ext]`,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(basePath, dist.root),
    filename: `${dist.js}app.[contenthash].js`,
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new StyleLintPlugin({
      syntax: 'scss',
      files: `./${paths.sass}**/*.s?(a|c)ss`,
    }),
    new MiniCssExtractPlugin({
      filename: `${dist.css}style.[contenthash].css`,
    }),
    new CopyWebpackPlugin(copy),
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
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new WebpackNotifierPlugin({
      title: process.env.npm_package_description,
      contentImage: path.join(basePath, 'notification.png'),
      excludeWarnings: true,
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: devServerContentBase,
    open: devServerOpenBrowser,
    watchContentBase: true,
    stats: {
      children: false, // Suppress "Entrypoint undefined" warnings
    },
  },
  stats: {
    children: false, // Suppress "Entrypoint undefined" warnings
  },
};

if (isStatic) {
  module.exports.module.rules.push({
    test: /\.(njk|nunjucks)$/,
    use: [
      {
        loader: 'html-srcsets-loader',
        options: {
          attrs: [
            'audio:src',
            'img:src',
            'img:srcset',
            'video:src',
            'source:src',
            'source:srcset',
          ],
          interpolate: true,
        },
      },
      {
        loader: `nunjucks-html-loader?${nunjucksOptions}`,
      },
    ],
  });

  module.exports.plugins.push(...pages);
} else {
  // clean directories when not in static mode
  module.exports.plugins.push(
    new CleanWebpackPlugin([
      path.join(dist.root, dist.css),
      path.join(dist.root, dist.js),
    ]),
  );
}

if (!isDev) {
  module.exports.plugins.push(
    new CleanWebpackPlugin([
      path.join(dist.root, dist.assets),
    ]),
  );
}
