const autoprefixer = require('gulp-autoprefixer');
var browserSync    = require('browser-sync').create();
var cleanCSS       = require('gulp-clean-css');
var gulp           = require('gulp');
var rename         = require('gulp-rename');
var sass           = require('gulp-sass');
var uglify         = require('gulp-uglify');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function () {
  // Materialize CSS
  gulp.src([
    './node_modules/materialize-css/dist/**/*',
  ])
  .pipe(gulp.dest('./vendor/materialize-css'))
});

// Convert SASS to CSS and autoprefix
gulp.task('css:compile', function () {
  return gulp.src('./assets/styles/scss/**/*.scss')
    .pipe(
      sass.sync({
        outputStyle: 'expanded'
      })
      .on('error', sass.logError)
    )
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
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

// Minify JavaScript
gulp.task('js:minify', function () {
  return gulp.src([
      './assets/scripts/js/*.js',
      '!./assets/scripts/js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/scripts/js'))
    .pipe(browserSync.stream());
});

// Configure the browserSync
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// CSS Shorthand
gulp.task('css', ['css:compile', 'css:minify']);

// JS Shorthand
gulp.task('js', ['js:minify']);

// Default task
gulp.task('default', ['css', 'js', 'vendor']);

// Dev task
gulp.task('watch', ['css', 'js', 'browserSync'], function () {

  process.on('SIGINT', function () {
    setTimeout(function () {
      process.exit(1);
    }, 500);
  });

  gulp.watch('./assets/styles/scss/**/*.scss', ['css']);
  gulp.watch('./assets/scripts/js/**/*.js', ['js']);
  gulp.watch('./*.html', browserSync.reload);
});
