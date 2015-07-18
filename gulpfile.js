var gulp = require('gulp');

var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var watch = require('gulp-watch');
var bowerFiles = require('main-bower-files');
var concat = require('gulp-concat');

gulp.task('lint', function () {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function () {
    return gulp.src('./dist/*')
        .pipe(clean({force: true, read: false}));
});

gulp.task('minify-css', function () {
    var opts = {comments: true, spare: true};
    gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-js', function () {
    gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
        .pipe(ngmin({dynamic: true}))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-bower-components', function () {
    gulp.src('./app/bower_components/**')
        .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', ['inject-dev'], function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('inject-dev', function () {
    gulp.src('./app/index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true ,addRootSlash: false}))
        .pipe(inject(gulp.src(['**/*.js', '**/*.css' , '!bower_components/**'], {
            read: false,
            'cwd': __dirname + '/app/'
        }), {addRootSlash: false}))
        .pipe(gulp.dest('./app'));
});

gulp.task('connect', function () {
    connect.server({
        root: 'app/', port: 8888
    });
});

gulp.task('connectDist', function () {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});

gulp.task('watch', function () {
    //gulp.watch(gulp.src(['./app/**/*.js']), ['lint', 'inject-dev']);
});

gulp.task('default',
    ['lint', 'inject-dev', 'connect', 'watch']
);

gulp.task('build',
    ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
);