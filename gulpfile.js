/**
 * Created by alanjui on 2016/2/29.
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('rimraf');

var inputPaths = {
  javascript: ['./app/**/*.js', '!./app/bower_components']
};

var outputPaths = {
  javascript: './app/js'
};

var minifiedJsFileName = 'bundle.min.js';

gulp.task('build-js', ['clean'], function () {
  return gulp.src(inputPaths.javascript)
    .pipe(sourcemaps.init())
    .pipe(concat(minifiedJsFileName))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputPaths.javascript));
});

gulp.task('clean', function (cb) {
  rimraf(outputPaths.javascript + '/' + minifiedJsFileName, cb);
});

gulp.task('watch', function () {
  gulp.watch(inputPaths.javascript, ['build-js']);
});

gulp.task('default', ['build-js']);
