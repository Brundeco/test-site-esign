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
    babel = require('gulp-babel'),
    sassLint = require('gulp-sass-lint'),
    util = require('gulp-util'),
    revkeep = require('gulp-rev-keep-original-name'),
    rjs = require('gulp-requirejs')
  ;

  // Settings
  var mode = typeof argv.mode !== typeof undefined ? argv.mode : 'static'; // ci, laravel, shop, static TODO Craft
  var liveReload = typeof argv.liveReload !== typeof liveReload;
  var production = typeof argv.production !== typeof undefined;
  var es6 = typeof argv.es6 !== typeof undefined;
  var lint = typeof argv.lint !== typeof undefined;
  var isLaravel = mode === 'shop' || mode === 'laravel';
  var languages = ['en']; // used to copy needed validation engine language files

  // Vars used in tasks
  var paths = {};
  paths.root = '';
  paths.base = paths.root;
  paths.resources = paths.base + 'resources/';
  paths.assets = paths.resources + 'assets/';
  paths.css = paths.assets + 'css/';
  paths.sass = paths.assets + 'sass/';
  if (mode === 'shop') paths.sass = paths.sass + 'client/';
  paths.js = paths.assets + 'js/';
  if (mode === 'shop') paths.js = paths.js + 'client/';
  paths.nunjucks = paths.resources + 'nunjucks/';
  paths.images = paths.assets + 'images/';
  paths.svg = paths.images + 'svg/';
  paths.fonts = paths.assets + 'fonts/';
  paths.babel = 'node_modules/babel-polyfill/dist/polyfill.js';
  paths.requireJs = {
    'node_modules': (mode === 'shop' ? '../' : '') + '../../../node_modules'
  };

  var dist = {base: paths.root + 'static/'};
  if (isLaravel) dist.base = paths.root + 'public/';
  if (mode === 'ci') dist.base = paths.root + ''; // Assets in root
  dist.assets = dist.base + 'assets/';
  if (isLaravel) dist.assets = dist.base + 'build/';
  dist.css = dist.assets + 'css/';
  dist.js = dist.assets + 'js/';
  dist.images = dist.assets + 'images/';
  dist.fonts = dist.assets + 'fonts/';
  dist.html = dist.base;
  dist.revManifest = dist.assets; // CI
  if (isLaravel) dist.revManifest = dist.base;
  if (mode === 'static') dist.revManifest = dist.base;

  if (mode === 'shop') require(__dirname + '/tasks/esign-shop-admin')(gulp, mode, liveReload, production, es6, lint);

  var assets = {
    styles: [
      // Add more if needed
    ]
  };

  var copy = [
    // Add if needed
  ];
  var j;
  for (j = 0; j < languages.length; j++) {
    copy.push([paths.js + 'libs/validation/languages/jquery.validationEngine-' + languages[j] + '.js',
      dist.js + 'libs/validation/languages/'])
  }

  // Image compression settings, by default JPEG & PNG compression rates equal to tinyPNG
  var imageConfig = {
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: ['--accurate', '--strip', '--quality', 'low', '--min', 55],
    mozjpeg: ['-optimize', '-progressive'],
    guetzli: false,
    gifsicle: true,
    svgo: true,
    concurrent: 10,
    quiet: false
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

    var src = [
      dist.js + (mode === 'shop' ? 'client.js' : 'app.js'),
      dist.js + 'head.js',
      dist.css + (mode === 'shop' ? 'client.css' : 'style.css')];
    if (!isLaravel) src.push(dist.js + 'contact.js');
    if (mode === 'shop') {
      src.push(dist.js + 'admin.js');
      src.push(dist.css + 'admin.css');
    }

    var task = gulp.src(src, {base: base})
      .pipe(sourcemaps.init({loadMaps: true}));

    if (production && mode !== 'static') {
      task = task.pipe(fJs)
        .pipe(uglify())
        .on('error', function (err) {
          util.log(util.colors.red('[Error]'), err.toString());
        })
        .pipe(fJs.restore)
        .pipe(fOwnCss)
        .pipe(revUrls({
          manifest: dist.revManifest + 'rev-manifest.json',
          debug: false,
          transform: function (object, key, value, settings) {
            var regex = /build\//;
            object[key.replace(regex, '')] = value.replace(regex, '');
          },
          revise: function (origUrl, fullUrl, manifest) {
            var revUrl = manifest[origUrl.replace(/^\.\.\//, '')];
            return '../' + revUrl;
          }
        }))
        .pipe(fOwnCss.restore)
        .pipe(fCss)
        .pipe(cleanCss({compatibility: 'ie9'}))
        .pipe(fCss.restore)
        .on('error', function (err) {
          console.error('Error in clean CSS task', err.toString());
        });
    }

    task = task.pipe(rev());
    if (!production) task = task.pipe(revkeep());
    task = task.pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(isLaravel ? dist.base : dist.assets))
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
    return task;
  });

  gulp.task('version-images', function() {
    var base = dist.base;
    if (mode === 'ci') base = dist.assets;
    var task = gulp
      .src(dist.images + '**/*', {base: base});

    if (production && mode !== 'static') {
      task = task.pipe(image(imageConfig));
    }

    task = task.pipe(rev());
    if (!production) task = task.pipe(revkeep());
    task = task.pipe(gulp.dest(isLaravel ? dist.base : dist.assets))
      .pipe(rev.manifest(dist.revManifest + 'rev-manifest.json', {
        base: dist.revManifest,
        merge: true
      }))
      .pipe(gulp.dest(dist.revManifest))
      .pipe(first())
      .pipe(customNotify({message: 'Images versioned'}))
    ;
    return task;
  });

  gulp.task('version', function(cb) {
    sequence('version-images', 'version-scripts-styles', cb);
  });

  // Clean
  gulp.task('clean', function () {
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

  gulp.task('plugins', function() {
    var i;
    var task = gulp;
    for (i = 0; i < copy.length; i++) {
      task = task.src(copy[i][0])
        .pipe(gulp.dest(copy[i][1]))
      ;
    }
    return task;
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
    return rjs({
      baseUrl: paths.js,
      out: 'head.js',
      generateSourceMaps: true,
      name: 'head',
      paths: paths.requireJs
    })
      .on('error', function (err) {
        util.log(util.colors.red('[Error]'), err.toString());
      })
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Scripts head merged'}))
      ;
  });

  // Scripts body
  gulp.task('scripts-body', function() {
    // // TODO jshint?
    return rjs({
      baseUrl: paths.js,
      out: mode === 'shop' ? 'client.js' : 'app.js',
      generateSourceMaps: true,
      name: 'esign',
      paths: paths.requireJs
    })
      .on('error', function (err) {
        util.log(util.colors.red('[Error]'), err.toString());
      })
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Scripts body merged'}))
    ;
  });

  // Scripts contact
  gulp.task('scripts-contact', function() {
    if (isLaravel) return gulp;
    return rjs({
      baseUrl: paths.js,
      out: 'contact.js',
      generateSourceMaps: true,
      name: 'contact',
      paths: paths.requireJs
    })
      .on('error', function (err) {
        util.log(util.colors.red('[Error]'), err.toString());
      })
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(dist.js))
      .pipe(filter(['**/*.js'])) // Filter so notification is only shown once
      .pipe(customNotify({message: 'Scripts contact merged'}))
      ;
  });

  // Styles
  gulp.task('styles', function() {
    var task = gulp
      .src([paths.sass + 'style.scss']); // compile sass

    if (lint) {
      task = task
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
    }

    return task
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(addsrc(assets.styles)) // other css files (plugins, libs)
      .pipe(autoprefixer({
        browsers: ['> 1%', 'Last 2 versions', 'IE 9'],
        cascade: false
      }))
      .pipe(concat(mode === 'shop' ? 'client.css' : 'style.css'))
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
    var tasks = ['watch-scripts', 'watch-styles', 'watch-nunjucks', 'watch-images', 'watch-fonts'];
    if (mode === 'shop') {
      tasks.push('watch-scripts-admin');
      tasks.push('watch-styles-admin');
    }
    return sequence(tasks, cb);
  });

  gulp.task('dummy', function(cb) { cb(); });

  gulp.task('build', function(cb) {
    var tasks = ['images', 'scripts', 'styles', 'fonts', 'plugins'];
    if (mode === 'static') tasks.push('templates'); // render nunjucks templates
    if (mode === 'shop') {
      tasks.push('plugins-admin');
      tasks.push('scripts-admin');
      tasks.push('styles-admin');
    }
    sequence('clean', tasks, 'version', cb);
  });

  gulp.task('server', [ 'watch', 'connect', 'open' ]);

  gulp.task('watch', function(cb) {
    // Do a complete build first, then start watching, optionally start live reload
    sequence('build', 'watcher', liveReload ? ['connect', 'open'] : 'dummy', cb);
  });

  gulp.task('default', function() {
    gulp.start('build');
  });

})();
