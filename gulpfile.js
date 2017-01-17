// Load plugins
var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    nunjucksRender = require('gulp-nunjucks-render'),
    nunjucks = require('gulp-nunjucks'),
    notify = require('gulp-notify'),
    del = require('del');

elixir.config.css.autoprefix.options.browsers = ['> 1%', 'Last 2 versions', 'IE 9', 'IE 8'];

// Templates
gulp.task('templates', function() {
  gulp.src(['resources/nunjucks/**/*.+(html|nunjucks)'])
    .pipe(nunjucksRender({
      path: ['resources/nunjucks']
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(notify({ message: 'templates complete' }));
});

// Clean
gulp.task('clean', function() {
  return del([ 'public/*.html', 'public/assets/css', 'public/assets/js', 'public/assets/images']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images', 'templates');
});

elixir(function(mix) {

  // Templates
  gulp.watch('resources/nunjucks/**/*.+(html|nunjucks)', ['templates']);

  // Styles
  mix.less('style.less', 'public/assets/css/style.css');

  // Scripts
  mix.scripts(['libs/modernizr.min.js'], 'public/js/head.js')
     .scripts(['libs/jquery.min.js', 'plugins.js', 'esign.js','script.js'], 'public/js/app.js');

  // Browsersync
  mix.browserSync({
    // If you are developing locally point this to your local url
    proxy: 'http://localhost:8888/_template/public',
    notify: false
  });
});
