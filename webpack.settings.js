const path = require('path');
const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const mode = 'static'; // ci, laravel, shop, craft, static
const devServerOpenBrowser = true;
const useFontsDirectory = false;
const useVideosDirectory = false;

// Don't edit from here
const isDev = process.env.NODE_ENV === 'development';
const isStatic = mode === 'static';
const isLaravel = mode === 'shop' || mode === 'laravel';
const isShop = mode === 'shop';
const isCraft = mode === 'craft';

// Paths
const basePath = process.cwd();

const paths = {
  root: '',
};

paths.resources = `${paths.root}resources/`;
paths.assets = `${paths.resources}assets/`;
paths.views = `${paths.resources}views/`;
paths.sass = `${paths.assets}sass/`;
paths.js = `${paths.assets}js/`;
paths.images = `${paths.assets}images/`;
paths.fonts = `${paths.assets}fonts/`;
paths.svgSprite = `${paths.images}svg-sprite/`;
paths.videos = `${paths.assets}videos/`;
paths.manifest = `${paths.resources}manifest/`;

if (isShop) {
  paths.sass = `${paths.sass}client/`;
  paths.js = `${paths.js}client/`;
}

const dist = {
  root: `${paths.root}static/`,
  assets: 'assets/',
  revManifest: '',
  manifest: '',
};

if (isLaravel) {
  if (process.env.npm_lifecycle_event === 'development') {
    console.log(
      '\x1b[31m%s\x1b[31m',
      'Use npm run watch instead of npm run dev (CI || Laravel)',
      '\x1b[0m',
    );
    process.exit();
  }
}

if (isLaravel) {
  dist.root = `${paths.root}public`;
  dist.assets = 'build/';
}

if (isCraft) {
  dist.root = `${paths.root}web/`;
  dist.assets = 'build/';
}

dist.css = `${dist.assets}css/`;
dist.js = `${dist.assets}js/`;
dist.images = `${dist.assets}images/`;
dist.fonts = `${dist.assets}fonts/`;
dist.svgSprite = `${dist.assets}svg-sprite/`;
dist.videos = `${dist.assets}videos/`;

const filenames = {
  dev: '[name].[ext]',
  devPathIncluded: '[path][name].[ext]',
  prod: '[name].[hash:8].[ext]',
  prodPathIncluded: '[path][name].[hash:8].[ext]',
  ignore: ['*.DS_Store'],
};

const devServerContentBase = path.join(basePath, dist.root);

const bladeOptions = {
  viewDir: 'resources/views',
};

const pages = glob
  .sync('**/*.blade.php', {
    cwd: path.join(basePath, `${paths.views}/`),
    root: '/',
  })
  .filter(filename => filename.indexOf('_') === -1)
  .filter(filename => filename.indexOf('components') !== 0)
  .filter(filename => filename.indexOf('layouts') !== 0)
  .map(
    page =>
      new HtmlWebpackPlugin({
        filename: (page => {
          return page
            .replace('.blade.php', '.html')
            .replace('/', '-')
            .replace('-index', '')
            .replace('pages-', '')
            .replace('home', 'index');
        })(page),
        template: `${paths.views}${page}`,
        excludeChunks: ['sprite'],
        minify: false,
      }),
  );

const settings = {
  basePath,
  devServerContentBase,
  devServerOpenBrowser,
  isDev,
  isStatic,
  paths,
  dist,
  filenames,
  bladeOptions,
  pages,
  useFontsDirectory,
  useVideosDirectory,
};

module.exports = settings;
