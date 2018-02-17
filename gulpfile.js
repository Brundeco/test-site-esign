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
      sequence = require('run-sequence'),
      uglify = require('gulp-uglify'),
      filter = require('gulp-filter'),
      cleanCss = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps')
  ;

  // Settings
  var mode = typeof argv.mode !== typeof undefined ? argv.mode : 'static'; // ci, laravel, static
  var liveReload = typeof argv.liveReload !== typeof liveReload ? true : false;
  var production = typeof argv.production !== typeof undefined;

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
  if (mode == 'laravel') dist.assets = dist.base + 'build/';
  dist.css = dist.assets + 'css/';
  dist.js = dist.assets + 'js/';
  dist.images = dist.assets + 'images/';
  dist.fonts = dist.assets + 'fonts/';
  dist.html = dist.base;
  dist.revManifest = dist.assets; // CI
  if (mode == 'laravel') dist.revManifest = dist.base;
  if (mode == 'static') dist.revManifest = dist.base;

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

  // Versioning
  gulp.task('version', function () {
    if (production) {
      var fJs = filter(['**/*.js'], {restore: true});
      var fCss = filter(['**/*.css'], {restore: true});
      return gulp.src([
          dist.js + 'app.js',
          dist.js + 'head.js',
          dist.js + 'contact.js',
          dist.css + 'style.css'
        ], {base: mode == 'laravel' ? dist.base : dist.assets})
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(fJs)
        .pipe(uglify())
        .pipe(fJs.restore)
        .pipe(fCss)
        .pipe(cleanCss({compatibility: 'ie9'}))
        .pipe(fCss.restore)
        .on('error', function(err) {
          console.error('Error in compress task', err.toString());
        })
        .pipe(rev())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(mode == 'laravel' ? dist.base : dist.assets))
        .pipe(rev.manifest({merge: true}))
        .pipe(gulp.dest(dist.revManifest))
        .pipe(filter(['**/*.json'])) // Filter so notification is only shown once
        .pipe(notify({message: 'Assets versioned'}))
      ;
    }
    return gulp;
  });

  // Clean
  gulp.task('clean', function () {
    return del([dist.base]);
  });

  /* Tiny png api key: https://tinypng.com/developers
   * free plan = max 500 images/month
   */
  gulp.task('retina-images', function () {
    return gulp
      .src(paths.images + 'test-images/**/*')
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
      .pipe(gulp.dest(paths.images))
      ;
  });

  // Svg sprite
  gulp.task('sprites', function () {
    return gulp
      .src(paths.svg + '*.svg')
      .pipe(svgSprite({
        mode: 'symbols',
        svgId: 'icon-%f'
      }))
      .pipe(gulp.dest(paths.assets + 'svg-sprite/'));
  });

  // Scripts head
  gulp.task('scripts-head', function() {
    return gulp
      .src([
        paths.js + 'libs/modernizr.min.js'
      ])
      .pipe(sourcemaps.init())
      .pipe(concat('head.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(notify({message: 'Scripts head merged'}))
    ;
  });

  // Scripts body
  gulp.task('scripts-body', function() {
    return gulp
      .src([
        paths.js + 'libs/jquery.min.js',
        paths.js + 'plugins.js',
        paths.js + 'esign.js'
      ])
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(notify({message: 'Scripts body merged'}))
    ;
  });

  // Scripts contact
  gulp.task('scripts-contact', function() {
    return gulp
      .src([
        paths.js + 'libs/validation/languages/jquery.validationEngine-nl.js',
        paths.js + 'libs/validation/jquery.validationEngine.js',
        paths.js + 'googlemaps-styles.js',
        paths.js + 'contact.js'
      ])
      .pipe(sourcemaps.init())
      .pipe(concat('contact.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(notify({message: 'Scripts contact merged'}))
    ;
  });

  // Styles
  gulp.task('styles', function() {
    return gulp
      .src([paths.sass + 'style.scss']) // compile sass
      .pipe(addsrc([])) // other css files (plugins, libs)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(concat('style.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.css))
      .pipe(filter(['**/*.css'])) // Filter so notification is only shown once
      .pipe(notify({message: 'Styles merged'}));
  });

  // Svg
  //{ plugins: [{ convertPathData: false }, { mergePaths: false }, { removeUnknownsAndDefaults: false }] }
  gulp.task('svg', function() {
    return gulp
      .src(paths.images + '**/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest(dist.images))
      .pipe(notify({message: 'SVGs minified'}));
  });


  // Images
  gulp.task('images', function() {
    return gulp
      .src(paths.images + '**/*')
      .pipe(gulp.dest(dist.images))
      .pipe(notify({message: 'Images copied'}));
  });

  // Fonts
  gulp.task('fonts', function() {
    return gulp
      .src(paths.fonts + '**/*')
      .pipe(gulp.dest(dist.fonts))
      .pipe(notify({message: 'Fonts copied'}));
  });

  gulp.task('scripts', function() {
    return gulp.start('scripts-head', 'scripts-body', 'scripts-contact');
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
    gulp.watch(paths.js + '**/*.js', ['scripts']);
    gulp.watch([paths.css + '**/*', paths.sass + '**/*'], ['styles']);
    gulp.watch(paths.nunjucks + '**/*', ['templates']);
    gulp.watch([paths.images + '**/*', '!' + paths.images + '**/*.svg'], ['images']);
    gulp.watch(paths.images + '**/*.svg', ['svg']);
    gulp.watch(paths.fonts + '**/*', ['fonts']);
  });

  gulp.task('build', function() {
    if (mode === 'static') gulp.start('templates');
    gulp.start('fonts');
    sequence('images', 'svg');
    sequence(['scripts', 'styles'], 'version');
  });

  gulp.task('server', [ 'watch', 'connect', 'open' ]);

  gulp.task('watch', function() {
    gulp.start('build');
    gulp.start('watcher');
    if (liveReload) {
      gulp.start('connect', 'open');
    }
  });

  gulp.task('default', function() {
    gulp.start('build');
  });

})();
