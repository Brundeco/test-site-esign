const path = require('path');
const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const mode = 'static'; // ci, laravel, shop, static
const devServerOpenBrowser = true;
const useFontsDirectory = false;
const useVideosDirectory = false;

// Don't edit from here
const isDev = (process.env.NODE_ENV === 'development');
const isStatic = mode === 'static';
const isLaravel = mode === 'shop' || mode === 'laravel';
const isCi = mode === 'ci';
const isShop = mode === 'shop';
const isCraft = mode === 'craft';
// const isFramework = isLaravel || isCi;

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
paths.svgSprite = `${paths.assets}svg-sprite/`;
paths.videos = `${paths.assets}videos/`;

if (isShop) {
  paths.sass = `${paths.sass}client/`;
  paths.js = `${paths.js}client/`;
}

const dist = {
  root: `${paths.root}static/`,
  assets: 'assets/',
  revManifest: '',
};

if (isLaravel || isCi) {
  if (process.env.npm_lifecycle_event === 'development') {
    console.log('\x1b[31m%s\x1b[31m', 'Use npm run watch instead of npm run dev (CI || Laravel)', '\x1b[0m') ;
    process.exit();
  }
}

if (isLaravel) {
  dist.root = `${paths.root}public/`;
  dist.assets = `${dist.root}build/`;
  dist.revManifest = `${dist.root}public/`;
}

if (isCi) {
  dist.root = paths.root;
  dist.assets = `${dist.root}assets/build/`;
  dist.revManifest = `${dist.root}assets/`;
}

if (isCraft) {
  dist.root = paths.root;
  dist.assets = `${dist.root}web/build/`;
  dist.revManifest = `${dist.root}web/`;
}

dist.css = `${dist.assets}css/`;
dist.js = `${dist.assets}js/`;
dist.images = `${dist.assets}images/`;
dist.fonts = `${dist.assets}fonts/`;
dist.svgSprite = `${dist.assets}svg-sprite/`;
dist.videos = `${dist.assets}videos/`;

const devServerContentBase = path.join(basePath, dist.root);

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

const settings = {
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
};

module.exports = settings;
