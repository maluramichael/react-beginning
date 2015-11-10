var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    _ = require('lodash');

var sourceFiles = 'src/**/*.js',
    htmlFiles = 'src/**/*.html';

// add custom browserify options here
var customOpts = {
    entries: ['./src/dependencies.js', './src/main.js'],
    debug: true
};

var opts = _.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform('babelify', {
    presets: ['es2015', 'react']
});
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return b.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./dist'));
}

gulp.task('build.html', function() {
    watch(htmlFiles, function() {
        return gulp.src(htmlFiles)
            .pipe(gulp.dest('dist'));
    });
});


gulp.task('bundle', bundle);

gulp.task('default', ['build.html', 'bundle']);
