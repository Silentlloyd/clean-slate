var gulp = require('gulp'),
	watch = require('gulp-watch'),
	less = require('gulp-less'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify');


gulp.task('default', function() {
	watch('./wp-content/themes/bitwise/static/less/*.less', function() {
		console.log('recompiling less');
		return gulp.src('./wp-content/themes/bitwise/static/less/bitwise.less')
			.pipe(plumber())
			.pipe(less())

			.pipe(gulp.dest('./wp-content/themes/bitwise/static/css'))
			.pipe(notify("you just got gulped, son"));
	});

});