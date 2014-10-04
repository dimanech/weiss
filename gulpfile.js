var gulp = require('gulp'),
	gutil = require('gulp-util'),
	csslint = require('gulp-csslint'),
	scsslint = require('gulp-scss-lint'),
	cssSource = 'source/css/*.css',
	scssSource = 'source/css/*.scss';

var scssCustomReporter = function (file) {
	gutil.log(gutil.colors.magenta(file.scsslint.issues.length + ' errors in ' + file.relative));

	file.scsslint.issues.forEach(function (issue) {
		gutil.log(gutil.colors.cyan(file.relative + ':' + issue.line) + ' ' + issue.reason)
	});
};

var cssCustomReporter = function (file) {
	gutil.log(gutil.colors.magenta(file.csslint.errorCount + ' errors in ' + file.relative));

	file.csslint.results.forEach(function (result) {
		gutil.log(gutil.colors.cyan(file.relative + ':' + result.error.line) + ' ' + result.error.message);
	});
};

gulp.task('scss-check', function () {
	gulp.src(scssSource)
		.pipe(scsslint({
			'config': 'scsslint.yml',
			customReport: scssCustomReporter
		}))
});

gulp.task('css-check', ['scss-check'], function () {
	gulp.src(cssSource)
		.pipe(csslint('csslintrc.json'))
		.pipe(csslint.reporter(cssCustomReporter))
});

gulp.task('scss-check-exit', function () {
	gulp.src(scssSource)
		.pipe(scsslint({
			'config': 'scsslint.yml'
		}))
		.pipe(scsslint.failReporter());
});

gulp.task('css-check-exit', ['scss-check-exit'], function () {
	gulp.src(cssSource)
		.pipe(csslint('csslintrc.json'))
		.pipe(csslint.failReporter());
});

gulp.task('code-guardian', ['scss-check', 'css-check']);

gulp.task('default', ['scss-check-exit', 'css-check-exit']);

