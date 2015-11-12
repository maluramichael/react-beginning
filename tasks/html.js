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
  var files = './src/**/*.html';

  gulp.task('build.html', function() {
    return gulp.src(files).pipe(gulp.dest('dist'));
  })

  gulp.task('watch.html', function(callback) {
    watch(files, {
      verbose: true
    }, function() {
      return gulp.src(files)
        .pipe(gulp.dest('dist'))
        .pipe(watch(files))
        .on('end', callback);
    });
  })
}
