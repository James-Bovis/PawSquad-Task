var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Requires Live Reload
var browserSync = require('browser-sync').create();

// Requireds imagemin
var imagemin = require('gulp-imagemin');

// Require gulp-cache
var cache = require('gulp-cache');

// Require del for cleaning
var del = require('del');

// Require run-sequence
var runSequence = require('run-sequence');

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
gulp.task('default', ['browserSync', 'sass'], function (){
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
  .pipe(gulp.dest('dist/img'))
});

// Copy css to "dist"
gulp.task('copy-css', function() {
  return gulp.src('build/css/**/*')
  .pipe(gulp.dest('dist/css/'))
})

// Copy "index.html" to "dist"
gulp.task('copy-index', function() {
  return gulp.src('build/index.html')
  .pipe(gulp.dest('dist/'))
})

// Copy audio to "dist"
gulp.task('copy-audio', function() {
  return gulp.src('build/audio/**/*')
  .pipe(gulp.dest('dist/audio/'))
})

// Delete "dist" folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// Runs a build task that readies the files for production
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['copy-index', 'copy-css', 'copy-audio', 'images'],
    callback
  )
})
