var babel = require('gulp-babel');
// var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var replace = require('gulp-replace');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
// var cleanCSS = require('gulp-clean-css');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// var watchify = require('watchify');

var babelOptions = {
    plugins: ['transform-object-assign'],
    presets: ['es2015', 'react', 'stage-0']
};

gulp.task('sass', function () {
    gulp.src('./assets/leftTabContainer.scss')
        .pipe(sass())
        .pipe(rename('left-tab-containe.css'))
        .pipe(gulp.dest('./dist'));
        // .pipe(livereload());
});

gulp.task('source-js', function () {
    return gulp.src('./src/LeftTabContainer.jsx')
        .pipe(concat('left-tab-containe.js'))
        .pipe(babel(babelOptions))
        // .pipe(replace('../assets/numberInput.scss', './number-input.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('build', ['source-js', 'sass']);