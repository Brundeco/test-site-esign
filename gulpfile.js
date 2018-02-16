(function(){
  //'use strict';
  var gulp = require('gulp'),
      elixir = require('laravel-elixir'),
      nunjucksRender = require('gulp-nunjucks-render'),
      nunjucks = require('gulp-nunjucks'),
      notify = require('gulp-notify'),
      del = require('del'),
      responsive = require('gulp-responsive'),
      tinypng = require('gulp-tinypng'),
      svgSprite = require('gulp-svg-sprites'),
      rev = require('gulp-rev'),
      sass = require('gulp-sass'),
      argv = require('yargs').argv,
      addsrc = require('gulp-add-src'),
      svgmin = require('gulp-svgmin'),
      connect = require('gulp-connect'),
      open = require('gulp-open'),
      concat = require('gulp-concat'),
      fs = require('vinyl-fs')
  ;

  // Settings
  var mode = typeof argv.mode !== typeof undefined ? argv.mode : 'static'; // ci, laravel, static
  var liveReload = typeof argv.liveReload !== typeof liveReload ? true : false;

  // Vars used in tasks
  var paths = {};
  paths.root = '';
  paths.base = paths.root;
  paths.resources = paths.base + 'resources/';
  paths.assets = paths.resources + 'assets/';
  paths.css = paths.assets + 'css/';
  paths.sass = paths.assets + 'sass/';
  paths.js = paths.assets + 'js/';
  paths.nunjucks = paths.resources + 'nunjucks/';
  paths.images = paths.assets + 'images/';
  paths.svg = paths.images + 'svg/';
  paths.dist = paths.assets + 'dist/';
  paths.fonts = paths.assets + 'fonts/';

  var dist = {base: paths.root + 'static/'};
  if (mode == 'laravel') dist.base = paths.root + 'public/';
  if (mode == 'ci') dist.base = paths.root + ''; // Assets in root
  dist.assets = dist.base + 'assets/';
  dist.css = dist.assets + 'css/';
  dist.js = dist.assets + 'js/';
  dist.images = dist.assets + 'images/';
  dist.fonts = dist.assets + 'fonts/';
  dist.html = dist.base;

  //console.log(paths);
  //console.log(dist);

  // Templates
  gulp.task('templates', function () {
    gulp.src([paths.nunjucks + '**/*.+(html|nunjucks)'])
      .pipe(nunjucksRender({
        //path: [paths.nunjucks]
        path: [paths.nunjucks]
      }))
      .pipe(gulp.dest(dist.html))
      .pipe(notify({message: 'Templates rendered'}));
  });

  // CI versioning
  gulp.task('ci_version', function () {
    del(['assets/dist/*']).then(function () {
      gulp.src([
        paths.js + 'app.js',
        paths.js + 'head.js',
        paths.js + 'contact.js',
        paths.css + 'style.css'
      ])
        .pipe(rev())
        .pipe(gulp.dest(paths.dist))
        .pipe(rev.manifest({
          merge: true
        }))
        .pipe(gulp.dest(paths.assets));
    });
  });

  // Clean
  gulp.task('clean', function () {
    return del([dist.base]);
  });

  /* Tiny png api key: https://tinypng.com/developers
   * free plan = max 500 images/month
   */
  gulp.task('retina-images', function () {
    gulp.src(paths.images + 'test-images/**/*')
      .pipe(responsive({
          '*.{png,jpg}': [{
            width: '100%',
            suffix: '@2x'
          }, {
            width: '50%',
            suffix: ''
          }]
        },
        {
          quality:70,
          progressive: true
        }))
      .pipe(tinypng('YOUR_API_CODE'))
      .pipe(gulp.dest(paths.images));

  });

  // Svg sprite
  gulp.task('sprites', function () {
    return gulp.src(paths.svg + '*.svg')
      .pipe(svgSprite({
        mode: 'symbols',
        svgId: 'icon-%f'
      }))
      .pipe(gulp.dest(paths.assets + 'svg-sprite/'));
  });

  // Scripts
  gulp.task('scripts', function() {
    gulp.src([
      paths.js + 'libs/modernizr.min.js',
    ])
    .pipe(concat('head.js'))
    .pipe(gulp.dest(dist.js));

    gulp.src([
      paths.js + 'libs/jquery.min.js',
      paths.js + 'plugins.js',
      paths.js + 'esign.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dist.js));

    gulp.src([
      paths.js + 'libs/validation/languages/jquery.validationEngine-nl.js',
      paths.js + 'libs/validation/jquery.validationEngine.js',
      paths.js + 'googlemaps-styles.js',
      paths.js + 'contact.js'
    ])
    .pipe(concat('contact.js'))
    .pipe(gulp.dest(dist.js))
    .pipe(notify({message: 'Scripts merged'}));
  });

  // Styles
  gulp.task('styles', function() {
    gulp.src([paths.sass + 'style.scss']) // compile sass
      .pipe(addsrc([])) // other css files (plugins, libs)
      .pipe(sass())
      .pipe(gulp.dest(dist.css))
      .pipe(notify({message: 'Styles merged'}));
  });

  // Svg
  //{ plugins: [{ convertPathData: false }, { mergePaths: false }, { removeUnknownsAndDefaults: false }] }
  gulp.task('svg', function() {
    gulp.src(paths.images + '**/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest(dist.images))
      .pipe(notify({message: 'SVGs minified'}));
  });


  // Images
  gulp.task('images', function() {
    gulp.src(paths.images + '**/*')
      .pipe(gulp.dest(dist.images))
      .pipe(notify({message: 'Images copied'}));
  });

  // Fonts
  gulp.task('fonts', function() {
    gulp.src(paths.fonts + '**/*')
      .pipe(gulp.dest(dist.fonts))
      .pipe(notify({message: 'Fonts copied'}));
  });

  gulp.task('connect', function () {
    return connect.server({
      root: [ dist.base ],
      livereload: true,
      port:'3000'
    });
  });

  gulp.task('open', function () {
    // TODO other environments
    return gulp.src(dist.base + 'index.html').pipe(open({ uri: 'http://localhost:3000/index.html'}));
  });

  gulp.task('watcher', function () {
    // F7 styles and scripts
    gulp.watch(paths.js + '**/*', ['scripts']);
    gulp.watch([paths.css + '**/*', paths.sass + '**/*'], ['styles']);
    gulp.watch(paths.nunjucks + '**/*', ['templates']);
    gulp.watch([paths.images + '**/*', '!' + paths.images + '**/*.svg'], ['images']);
    gulp.watch(paths.images + '**/*.svg', ['svg']);
    gulp.watch(paths.fonts + '**/*', ['fonts']);
  });

  gulp.task('build', function() {
    if (mode === 'static') gulp.start('templates');
    gulp.start(['images', 'fonts', 'svg', 'styles', 'scripts']);
  });

  gulp.task('server', [ 'watch', 'connect', 'open' ]);

  gulp.task('watch', function() {
      gulp.start('watcher');
      if (liveReload) {
        gulp.start('connect', 'open');
      }
  });

  gulp.task('default', function() {
    gulp.start('build');
  });

})();
