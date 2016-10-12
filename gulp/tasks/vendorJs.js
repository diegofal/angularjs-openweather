import config       from '../config';
import gulp         from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';

gulp.task('vendorJs', function () {

  return gulp.src(config.vendor.css)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream());
});
