const path = require('path');
const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

const mode = 'static'; // ci, laravel, shop, static
const devServerOpenBrowser = true;
const useFontsDirectory = false;

// Don't edit from here
const isDev = (process.env.NODE_ENV === 'development');
const isLaravel = mode === 'shop' || mode === 'laravel';
const isCi = mode === 'ci';
const isShop = mode === 'shop';
const isFramework = isLaravel || isCi;

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

if (isShop) {
  paths.sass = `${paths.sass}client/`;
  paths.js = `${paths.js}client/`;
}

const dist = {
  root: `${paths.root}static/`,
  assets: 'assets/',
  revManifest: '',
};

if (isLaravel) dist.root = `${paths.root}public/`;
if (isCi) dist.root = `${paths.root}assets/`;
if (isFramework) dist.assets = 'build/';

dist.css = `${dist.assets}css/`;
dist.js = `${dist.assets}js/`;
dist.images = `${dist.assets}images/`;
dist.fonts = `${dist.assets}fonts/`;
dist.svgSprite = `${dist.assets}svg-sprite/`;

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
  paths,
  dist,
  nunjucksOptions,
  pages,
  useFontsDirectory,
};

module.exports = settings;
