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

require('laravel-elixir-svgmin');

elixir.config.css.autoprefix.options.browsers = ['> 1%', 'Last 2 versions', 'IE 9', 'IE 8'];

// Templates
gulp.task('templates', function () {

  gulp.src(['resources/nunjucks/**/*.+(html|nunjucks)'])
    .pipe(nunjucksRender({
      path: ['resources/nunjucks']
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(notify({message: 'templates complete'}));

});

// Clean
gulp.task('clean', function () {
  return del(['public/*.html', 'public/assets/css', 'public/assets/js', 'public/assets/images']);
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
    .pipe(gulp.dest('public/assets/images'));

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

  // Templates
  gulp.watch('resources/nunjucks/**/*.+(html|nunjucks)', ['templates']);

  // Images
  mix.copy('resources/assets/images', 'public/assets/images');

  // Styles
  //mix.less('style.less', 'public/assets/css/style.css');

  mix.sass('style.scss', 'public/assets/css/style.css');

  // Svg
  mix.svg('resources/assets/images/**/*.svg', 'public/assets/images', './',
      { plugins: [{ convertPathData: false }, { mergePaths: false }, { removeUnknownsAndDefaults: false }] }
  );

  // Scripts
  mix.scripts(['libs/modernizr.min.js'], 'public/assets/js/head.js')
     .scripts(['libs/jquery.min.js', 'plugins.js', 'esign.js'], 'public/assets/js/app.js');

  // Browsersync
  mix.browserSync({
    // If you are developing locally point this to your local url
    proxy: 'localhost:8888/frontend-template/public',
    files: ['public/**/*'],
    injectChanges: true,
    notify: false
  });
});
