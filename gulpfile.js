var browserSync = require('browser-sync').create();
var cleanCSS    = require('gulp-clean-css');
var gulp        = require('gulp');
var log         = require('fancy-log');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function () {
  // Materialize CSS
  gulp.src([
    './node_modules/materialize-css/dist/**/*',
  ])
  .pipe(gulp.dest('./vendor/materialize-css'))
});

// Convert SASS to CSS
gulp.task('css:compile', function () {
  return gulp.src('./assets/styles/scss/**/*.scss')
    .pipe(
      sass.sync({
        outputStyle: 'expanded'
      })
      .on('error', sass.logError)
    )
    .pipe(gulp.dest('./assets/styles/css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function () {
  return gulp.src([
      './assets/styles/css/*.css',
      '!./assets/styles/css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/styles/css'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Configure the browserSync
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Default task
gulp.task('default', ['css', 'vendor']);

// Dev task
gulp.task('watch', ['css', 'browserSync'], function () {

  process.on('SIGINT', function () {
    setTimeout(function () {
      log('------------- Successfully closed ' + process.pid);
      process.exit(1);
    }, 500);
  });

  gulp.watch('./assets/styles/scss/**/*.scss', ['css'], browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});
