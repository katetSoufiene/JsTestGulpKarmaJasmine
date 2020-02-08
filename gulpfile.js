

var gulp = require('gulp');
var karma = require('karma').Server;

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, function () {
        done();
    });
});




