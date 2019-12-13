module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './docs',
            https: false,
            open: false,
            // tunnel: false,
            // tunnel: "p-pressroll",
            // online: true

        });
    });
};
