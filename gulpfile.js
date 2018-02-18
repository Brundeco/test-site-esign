(function(){
  'use strict';
  var gulp = require('gulp'),
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
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    concat = require('gulp-concat'),
    sequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    filter = require('gulp-filter'),
    cleanCss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    revDistClean = require('gulp-rev-dist-clean'),
    first = require('gulp-first'),
    image = require('gulp-image'),
    revUrls = require('gulp-rev-urls'),
    babel = require('gulp-babel')
  ;

  // Settings
  var mode = typeof argv.mode !== typeof undefined ? argv.mode : 'static'; // ci, laravel, static TODO Craft
  var liveReload = typeof argv.liveReload !== typeof liveReload;
  var production = typeof argv.production !== typeof undefined;
  var es6 = typeof argv.es6 !== typeof undefined;

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
  paths.fonts = paths.assets + 'fonts/';
  paths.babel = 'node_modules/babel-polyfill/dist/polyfill.js';

  var dist = {base: paths.root + 'static/'};
  if (mode === 'laravel') dist.base = paths.root + 'public/';
  if (mode === 'ci') dist.base = paths.root + ''; // Assets in root
  dist.assets = dist.base + 'assets/';
  if (mode === 'laravel') dist.assets = dist.base + 'build/';
  dist.css = dist.assets + 'css/';
  dist.js = dist.assets + 'js/';
  dist.images = dist.assets + 'images/';
  dist.fonts = dist.assets + 'fonts/';
  dist.html = dist.base;
  dist.revManifest = dist.assets; // CI
  if (mode === 'laravel') dist.revManifest = dist.base;
  if (mode === 'static') dist.revManifest = dist.base;

  var assets = {
    scripts: {
      head: [
        paths.js + 'libs/modernizr.min.js'
        // Add more here if needed
      ],
      body: [
        paths.js + 'libs/jquery-3.2.1.js',
        paths.js + 'polyfills/native-console.js',
        paths.js + 'plugins/response/response.js',
        paths.js + 'plugins/jquery-touchswipe/jquery.touchswipe.js',
        paths.js + 'es6example.js',
        paths.js + 'esign.js'
        // Add more if needed
      ],
      contact: [
        paths.js + 'libs/validation/languages/jquery.validationEngine-nl.js',
        paths.js + 'libs/validation/jquery.validationEngine.js',
        paths.js + 'googlemaps-styles.js',
        paths.js + 'contact.js'
        // Add more if needed
      ]
    },
    styles: [
      // Add if needed
    ]
  };

  if (es6) {
    assets.scripts.body.unshift(paths.babel);
    assets.scripts.contact.unshift(paths.babel);
  }

  var es6Scripts = [
    paths.js + 'es6example.js'
  ];

  var customNotify = function(opts) {
    var defaults = {
      icon: __dirname + '/notification.png',
      title: 'Gulp'
    };
    for (var key in opts) {
      if (opts.hasOwnProperty(key)) defaults[key] = opts[key];
    }
    return notify(defaults);
  };

  // Templates
  gulp.task('templates', function () {
    gulp.src([paths.nunjucks + '**/*.+(html|nunjucks)'])
      .pipe(nunjucksRender({
        path: [paths.nunjucks]
      }))
      .pipe(gulp.dest(dist.html))
      .pipe(first())
      .pipe(customNotify({message: 'Templates rendered'}));
  });

  // Versioning
  gulp.task('version-scripts-styles', function () {
    var fJs = filter(['**/*.js'], {restore: true});
    var fCss = filter(['**/*.css'], {restore: true});
    var fOwnCss = filter([dist.css + 'style.css'], {restore: true});
    var base = dist.base;
    if (mode === 'ci') base = dist.assets;

    var src = [dist.js + 'app.js', dist.js + 'head.js', dist.css + 'style.css'];
    if (mode !== 'laravel') src.push(dist.js + 'contact.js');

    return gulp.src(src, {base: base})
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(fJs)
      .pipe(uglify())
      .pipe(fJs.restore)
      .pipe(fOwnCss)
      .pipe(revUrls({
        manifest: dist.revManifest + 'rev-manifest.json',
        debug: false,
        transform: function(object, key, value, settings) {
          var regex = /build\//;
          object[key.replace(regex, '')] = value.replace(regex, '');
        },
        revise: function (origUrl, fullUrl, manifest) {
          var revUrl = manifest[origUrl.replace(/^\.\.\//,'')];
          return '../' + revUrl;
        }
      }))
      .pipe(fOwnCss.restore)
      .pipe(fCss)
      .pipe(cleanCss({compatibility: 'ie9'}))
      .pipe(fCss.restore)
      .on('error', function(err) {
        console.error('Error in clean CSS task', err.toString());
      })
      .pipe(rev())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(mode === 'laravel' ? dist.base : dist.assets))
      .pipe(rev.manifest(dist.revManifest + 'rev-manifest.json', {
        base: dist.revManifest,
        merge: true
      }))
      .pipe(gulp.dest(dist.revManifest))
      .pipe(first()) // Filter so notification is only shown once
      .pipe(customNotify({
        message: 'Assets versioned'
      }))
    ;
  });

  gulp.task('version-images', function() {
    var base = dist.base;
    if (mode === 'ci') base = dist.assets;
    return gulp
      .src(dist.images + '**/*', {base: base})
      .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: true,
        mozjpeg: true,
        guetzli: false,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: false, // defaults to false,
        options: {
          jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
          mozjpeg: ['-optimize', '-progressive']
        }
      })) // PNG compression equal to tinyPNG TODO improve jpeg compression
      .pipe(rev())
      .pipe(gulp.dest(mode === 'laravel' ? dist.base : dist.assets))
      .pipe(rev.manifest(dist.revManifest + 'rev-manifest.json', {
        base: dist.revManifest,
        merge: true
      }))
      .pipe(gulp.dest(dist.revManifest))
      .pipe(first())
      .pipe(customNotify({message: 'Images versioned'}))
    ;
  });

  gulp.task('version', function(cb) {
    if (production && mode !== 'static') {
      sequence('version-images', 'version-scripts-styles', cb);
    } else {
      cb();
    }
  });

  // Clean
  gulp.task('clean', function () {
    // TODO check for all envs
    //return del([dist.base]);
    try {
      return gulp.src([dist.assets + '**/*'], {read: false})
        .pipe(revDistClean(dist.revManifest + 'rev-manifest.json', {keepOriginalFiles: true, keepRenamedFiles: false}))
        .pipe(first())
        .pipe(customNotify({message: 'Old files cleaned'}))
    } catch (e) {
      return gulp;
    }
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

  function handleEs6(task) {
    if (!es6) return task;
    var fEs6 = filter(es6Scripts instanceof Array ? es6Scripts : ['**/*'], {restore: true});
    return task
      .pipe(fEs6)
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(fEs6.restore)
    ;
  }

  // Scripts head
  gulp.task('scripts-head', function() {
    var task = gulp
      .src(assets.scripts.head)
      .pipe(sourcemaps.init())
    ;
    task = handleEs6(task);
    return task
      .pipe(concat('head.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Scripts head merged'}))
    ;
  });

  // Scripts body
  gulp.task('scripts-body', function() {
    var task = gulp
      .src(assets.scripts.body)
      .pipe(sourcemaps.init())
    ;
    task = handleEs6(task);
    return task
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Scripts body merged'}))
    ;
  });

  // Scripts contact
  gulp.task('scripts-contact', function() {
    if (mode === 'laravel') return gulp;
    var task = gulp
      .src(assets.scripts.contact)
      .pipe(sourcemaps.init())
    ;
    task = handleEs6(task);
    return task
      .pipe(concat('contact.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Scripts contact merged'}))
    ;
  });

  // Styles
  gulp.task('styles', function() {
    return gulp
      .src([paths.sass + 'style.scss']) // compile sass TODO check if we can apply a linter
      .pipe(addsrc(assets.styles)) // other css files (plugins, libs)
      .pipe(sass())
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
        browsers: ['> 1%', 'Last 2 versions', 'IE 9'],
        cascade: false
      }))
      .pipe(concat('style.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.css))
      .pipe(filter(['**/*.css'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Styles merged'}));
  });

  // Images
  gulp.task('images', function() {
    return gulp
      .src(paths.images + '**/*')
      .pipe(gulp.dest(dist.images))
      .pipe(first())
      .pipe(customNotify({message: 'Images copied'}));

  });

  // Fonts
  gulp.task('fonts', function() {
    return gulp
      .src(paths.fonts + '**/*')
      .pipe(gulp.dest(dist.fonts))
      .pipe(customNotify({message: 'Fonts copied'}));
      // TODO check if other filetypes can be auto-generated
  });

  // Scripts
  gulp.task('scripts', function(cb) {
    return sequence(['scripts-head', 'scripts-body', 'scripts-contact'], cb);
    // TODO ES6
    // TODO check if we can apply a linter
  });

  // Start live reload server
  gulp.task('connect', function () {
    return connect.server({
      root: [ dist.base ],
      livereload: true,
      port:'3000'
    });
  });

  // Open live reload in browser
  gulp.task('open', function () {
    // TODO other environments
    return gulp.src(dist.base + 'index.html').pipe(open({ uri: 'http://localhost:3000/index.html'}));
  });

  gulp.task('watch-scripts', function() {
    return gulp.watch(paths.js + '**/*.js', ['scripts']);
  });

  gulp.task('watch-styles', function() {
    return gulp.watch([paths.css + '**/*', paths.sass + '**/*'], ['styles']);
  });

  gulp.task('watch-nunjucks', function() {
    return gulp.watch(paths.nunjucks + '**/*', ['templates']);
  });

  gulp.task('watch-images', function() {
    return gulp.watch(paths.images + '**/*', ['images']);
  });

  gulp.task('watch-fonts', function() {
    return gulp.watch(paths.fonts + '**/*', ['fonts']);
  });

  gulp.task('watcher', function (cb) {
    // TODO watcher for Laravel's blade files, watcher for CI views
    return sequence(
      ['watch-scripts', 'watch-styles', 'watch-nunjucks', 'watch-images', 'watch-fonts'], cb
    );
  });

  gulp.task('build', function(cb) {
    var tasks = ['images', 'scripts', 'styles', 'fonts'];
    if (mode === 'static') tasks.push('templates'); // render nunjucks templates
    sequence('clean', tasks, 'version', cb);
  });

  gulp.task('server', [ 'watch', 'connect', 'open' ]);

  gulp.task('watch', function(cb) {
    // Do a complete build first, then start watching, optionally start live reload
    sequence('build', 'watcher', liveReload ? ['connect', 'open'] : [], cb);
  });

  gulp.task('default', function() {
    gulp.start('build');
  });

})();
