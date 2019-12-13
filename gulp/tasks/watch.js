module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch(['./dev/components/**/*.pug', './dev/pages/*.pug', './dev/layouts/*.pug'], $.gulp.series('pug'));
        $.gulp.watch(['./dev/styles/**/*.sass', './dev/components/**/*.sass'], $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/assets/images/**/*.{png,jpg,gif}', $.gulp.series('img:dev'));
        $.gulp.watch('./dev/js/**/*.js', $.gulp.series('js:dev'));
        $.gulp.watch('./dev/libs/**/*.js', $.gulp.series('libsJS:dev'));
        $.gulp.watch('./dev/libs/**/*.css', $.gulp.series('libsStyles:dev'));
    });
};