
const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const less = require('gulp-less');
//const minifyCSS = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');

gulp.task('webpack', (callback) => {
  webpack(require('./webpack.config.js'), (err, stats) => {
    callback();
  });
});

gulp.task('icon', (callback) => {
  callback();
});

gulp.task('less', () => {
  return gulp.src('./client/style/app.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    //.pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['less', 'webpack']);
