var fs = require('fs'),
  gulp = require('gulp'),
	watch = require('gulp-watch'),
	gutil = require('gulp-util'),
	path = require('path');

var files = fs.readdirSync('tasks');

files.forEach(function(file) {
  var task = require('./' + path.join('tasks', file));
  task(gulp);
});

gulp.task('watch', ['default', 'watch.html', 'watch.js'], function(){});
gulp.task('build', ['build.vendor.js', 'build.html', 'build.js']);
gulp.task('default', ['build']);
