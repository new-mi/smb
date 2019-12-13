let videoPATH = {
        "input": "./dev/assets/video/*.{mp4, webm}",
        "ouput": "./build/assets/video/"
    };

module.exports = function () {
    $.gulp.task('video:dev', () => {
        return $.gulp.src(videoPATH.input)
            .pipe($.gulp.dest(videoPATH.ouput));
    });
}
