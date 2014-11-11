var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', ['lint','lint2'], function() {});
gulp.task('lint', function()
{
    return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lint2', function()
{
    return gulp.src('./app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});