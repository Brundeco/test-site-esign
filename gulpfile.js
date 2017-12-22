// Settings
var mode = 'static'; // ci, laravel, static
var browserSyncEnabled = true;

// Vars used in tasks
var basePath = '';

switch (mode) {
  case 'static':
    basePath = 'static/';
    break;
  case 'laravel':
    basePath = 'public/';
    break;
  case 'ci':
    // Assets in root
    basePath = '';
    break;
}

// Load plugins
var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    nunjucksRender = require('gulp-nunjucks-render'),
    nunjucks = require('gulp-nunjucks'),
    notify = require('gulp-notify'),
    del = require('del'),
    responsive = require('gulp-responsive'),
    tinypng = require('gulp-tinypng'),
    svgSprite = require('gulp-svg-sprites');
    rev = require('gulp-rev');

require('laravel-elixir-svgmin');

elixir.config.css.autoprefix.options.browsers = ['> 1%', 'Last 2 versions', 'IE 9'];

// Templates
gulp.task('templates', function () {

  gulp.src(['resources/nunjucks/**/*.+(html|nunjucks)'])
    .pipe(nunjucksRender({
      path: ['resources/nunjucks']
    }))
    .pipe(gulp.dest('./static/'))
    .pipe(notify({message: 'templates complete'}));

});

// CI versioning
gulp.task('ci_version', function () {
  del(['assets/dist/*']).then(function () {
    gulp.src([
      basePath + 'assets/js/app.js',
      basePath + 'assets/js/head.js',
      basePath + 'assets/js/contact.js',
      basePath + 'assets/css/style.css'
    ])
      .pipe(rev())
      .pipe(gulp.dest(basePath + 'assets/dist'))
      .pipe(rev.manifest({
        merge: true
      }))
      .pipe(gulp.dest(basePath + 'assets'));
  });
});

// Clean
gulp.task('clean', function () {
  return del([basePath + '*.html', basePath + 'assets/css', basePath + 'assets/js', basePath + 'assets/images']);
});

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('retina-images', 'templates');
});

/* Tiny png api key: https://tinypng.com/developers
 * free plan = max 500 images/month
 */
gulp.task('retina-images', function () {

  gulp.src('resources/assets/images/test-images/**/*')
    .pipe(responsive({
      '*.{png,jpg}': [{
        width: '100%',
        suffix: '@2x'
      }, {
        width: '50%',
        suffix: ''
      }],
    },
    {
      quality:70,
      progressive: true
    }))
    .pipe(tinypng('YOUR_API_CODE'))
    .pipe(gulp.dest(basePath + 'assets/images'));

});

// Svg sprite
gulp.task('sprites', function () {
  return gulp.src('resources/assets/images/svg/*.svg')
    .pipe(svgSprite({
      mode: 'symbols',
      svgId: 'icon-%f'
    }))
    .pipe(gulp.dest('resources/assets/svg-sprite/'));
});

elixir(function (mix) {
  var watchMode = elixir.isWatching();

  // Templates
  if  (mode === 'static') {
    if (watchMode) {
      gulp.watch('resources/nunjucks/**/*.+(html|nunjucks)', ['templates']);
    } else {
      gulp.start('templates');
    }
  }

  // Images
  mix.copy('resources/assets/images', basePath + 'assets/images');

  // Fonts
  mix.copy('resources/assets/fonts', basePath + 'assets/fonts');

  // Styles
  //mix.less('style.less', basePath + 'assets/css/style.css');

  mix.sass('style.scss', basePath + 'assets/css/style.css');

  // Svg
  mix.svg('resources/assets/images/**/*.svg', basePath + 'assets/images', './',
      { plugins: [{ convertPathData: false }, { mergePaths: false }, { removeUnknownsAndDefaults: false }] }
  );

  // Scripts
  mix.scripts([
      'libs/modernizr.min.js'
    ], basePath + 'assets/js/head.js')
    .scripts([
      'libs/jquery.min.js',
      'plugins.js',
      'esign.js'
    ], basePath + 'assets/js/app.js')
    .scripts([
      'libs/validation/languages/jquery.validationEngine-nl.js',
      'libs/validation/jquery.validationEngine.js',
      'googlemaps-styles.js',
      'contact.js'
    ], basePath + 'assets/js/contact.js');

  // Browsersync
  if (browserSyncEnabled) {
    mix.browserSync({
      // If you are developing locally point this to your local url
      proxy: 'localhost:8888/frontend-template/static',
      files: [basePath + '**/*'],
      injectChanges: true,
      notify: false
    });
  }

  // Versioning based on current mode
  if  (mode === 'laravel') {
    // Directories in version function are relative to the public directory
    mix.version([
      'js/app.js',
      'js/contact.js',
      'css/style.css'
    ]);

    // copy asset dirs to build dir
    var dirs = ['fonts', 'images'];
    var i;
    for (i = 0; i < dirs.length; i++) {
      mix.copy('public/' + dirs[i], 'public/build/' + dirs[i]);
    }
  }

  if (mode === 'ci') {
    if (watchMode) {
      gulp.watch('assets/css/*.css', ['ci_version']);
      gulp.watch('assets/js/*.js', ['ci_version']);
    } else {
      gulp.start('ci_version');
    }
  }
});
