let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "inputLIBS": "./dev/libs/**/",
        "inputJS": "./dev/js/",
        "ouput": "./build/assets/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(scriptsPATH.inputLIBS + '*.js')
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(scriptsPATH.inputLIBS + '*.js')
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src(scriptsPATH.inputJS + '*.js')
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src(scriptsPATH.inputJS + '*.js')
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
