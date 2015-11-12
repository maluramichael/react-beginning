var sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  watch = require('gulp-watch'),
  watchify = require('watchify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  _ = require('lodash');

module.exports = function(gulp) {
  // add custom browserify options here
  var customOptions = {
      entries: ['./src/main.js'],
      debug: true
    },
    files = './src/**/*.js',
    browserifyOptions = _.assign({}, watchify.args, customOptions);

  var mainBundle = watchify(browserify(browserifyOptions));

  function bundleApp() {
    return mainBundle.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./dist'));
  }

  function bundleVendor() {
    return browserify({
        entries: ['./src/dependencies.js']
      })
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('vendor.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./dist'));
  }

  gulp.task('build.js', function() {
    return gulp.src(files).pipe(gulp.dest('dist'));
  });

  gulp.task('build.vendor.js', bundleVendor);

  gulp.task('watch.js', function(callback) {
    mainBundle.transform('babelify', {
      presets: ['es2015', 'react']
    });
    mainBundle.on('update', bundleApp); // on any dep update, runs the bundler
    mainBundle.on('log', gutil.log); // output build logs to terminal
    bundleApp();
  });
}
