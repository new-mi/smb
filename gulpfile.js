"use strict";

global.$ = {
    path: {
        task: require('./gulp/tasks.js')
    },
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    fs: require('fs')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:dev',
        'libsStyles:dev',
        'img:dev',
        'video:dev',
        'libsJS:dev',
        'js:dev',
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'libsStyles:build',
        'img:build',
        'libsJS:build',
    )
));
$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
