const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanFolder = require('gulp-clean');
const minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

function cleanAll(cb){
  gulp.src('./dist/*')
  .pipe(cleanFolder());
  cb();
}

function compressjs(cb){
  gulp.src('./index.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
  cb();
}

function minifyCss(cb){
  gulp.src('./style.css')
  .pipe(minify())
  .pipe(gulp.dest('./dist'))
  cb();
}

function compressImage(cb){
  gulp.src('./images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/image'))
  cb();
}

exports.default = gulp.series(cleanAll,gulp.parallel(compressjs,minifyCss,compressImage));
