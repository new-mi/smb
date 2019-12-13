module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./dev/assets/fonts/**/*.*')
            .pipe($.gulp.dest('./docs/assets/fonts/'));
    });
};
