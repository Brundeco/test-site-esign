# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Read the [frontend template docs](https://docs.esign.eu/books/development/page/front-end-template) for more detailed info about the template.

## [Unreleased]

## [2.0.0] - 2019-01-22 - Webpack build system
This major update introduces Webpack 4 as building tool instead of Gulp.

### Added
- Webpack 4.28.4
- Postcss
- Eslint
- Stylelint
- Hot reloading
- Vendor split

### Changed
- Rewritten javascript to ES6 & Eslint style guide
- esign.js > app.js
- Node modules as vendor.js file
- Listen to matchMedia javascript event for responsive changes

### Removed
- Gulp
- Requirejs
- IE9 support in autoprefixer
- Response.js


## [1.3.0] - 2018-07-10
### Added
- Vanilla Gulp
- Requirejs

### Removed
- Laravel Elixir


## [1.2.2] - 2018-05-07
### Removed
- LESS


## [1.2.1] - 2017-07-27
### Removed
- IE7 / IE8 support in js


## [1.2.0] - 2017-06-15
### Changed
- New grid system inspired on Shopify's Timber template
- Renamed mediaquery variables


## [1.1.1] - 2017-06-01
### Removed
- IE7 / IE8 support in css


## [1.1.0] - 2017-05-29
### Added
- SASS


## [1.0.0] - 2017-05-26 - Gulp build system
### Added
- Gulp & Laravel Elixir
- Nunjucks
- Svg sprite generator
- Editor config


## [0.3.0] - 2017-04-12
### Changed
- Container has fluid width


## [0.2.2] - 2016-09-21
### Added
- Container with fixed width (previously manually added)


## [0.2.1] - 2015-12-17
### Removed
- Retina.js


## [0.2.0] - 2015-10-07
### Changed
- Rewrite script.js to esign.js object


## [0.1.0] - 2014-11-17
### Added
- Mediaqueries as less variables


## [0.0.0] - 2014-02-21
Initial template with LESS without any build tools.
