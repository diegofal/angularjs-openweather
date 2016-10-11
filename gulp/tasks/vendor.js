import config       from '../config';
import gulp         from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import concat       from 'gulp-concat'

gulp.task('vendor', function () {

  return gulp.src(config.vendor.css)
    // .on('error', handleErrors)
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream());
});
