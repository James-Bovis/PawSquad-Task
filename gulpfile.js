var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Requires Live Reload
var browserSync = require('browser-sync').create();

// Requireds imagemin
var imagemin = require('gulp-imagemin');

// Require gulp-cache
var cache = require('gulp-cache');

// Compiles the sass code into css
gulp.task('sass', function(){
  return gulp.src('build/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass - outputs compressed file
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Runs browsersync on root folder
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
})


// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('build/scss/**/*.scss', ['sass']);
  // Other watchers
  gulp.watch('build/*.html', browserSync.reload);
})

// Optimise images
gulp.task('images', function(){
  return gulp.src('build/img/**/*.+(png|jpg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});
