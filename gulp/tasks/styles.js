let plumber = require('gulp-plumber'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    csscomb = require('gulp-csscomb'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    stylesPATH = {
        "input": "./dev/styles/",
        "inputLIBS": "./dev/libs/**/",
        "ouput": "./build/assets/css/"
    };

module.exports = function () {
    $.gulp.task('styles:dev', () => {
        return $.gulp.src(stylesPATH.input + '*.sass')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(scss())
            .pipe(autoprefixer({
                 overrideBrowserslist:  ['last 3 versions']
            }))
            .pipe(sourcemaps.write())
            .pipe($.gulp.dest(stylesPATH.ouput))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('libsStyles:dev', () => {
      return $.gulp.src(stylesPATH.inputLIBS + '*.css')
          .pipe(concatCss("libs.min.css"))
          .pipe($.gulp.dest(stylesPATH.ouput))
          .on('end', $.browserSync.reload);
    });
    $.gulp.task('styles:build', () => {
        return $.gulp.src(stylesPATH.input + 'styles.scss')
            .pipe(scss())
            .pipe(autoprefixer({
                 overrideBrowserslist:  ['last 3 versions']
            }))
            .pipe(csscomb())
            .pipe($.gulp.dest(stylesPATH.ouput))
    });
    $.gulp.task('libsStyles:build', () => {
      return $.gulp.src(stylesPATH.inputLIBS + '*.css')
          .pipe(concatCss("libs.min.css"))
          .pipe($.gulp.dest(stylesPATH.ouput))
          .on('end', $.browserSync.reload);
    });
};
