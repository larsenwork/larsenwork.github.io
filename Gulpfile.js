const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const pngquant = require('imagemin-pngquant');

const stylesheet = 'scss/main.scss';
const script     = 'main.js';
const distFolder = 'dist';
const imgSrc     = 'img/*';
const imgDist    = 'dist/img';
const scssFiles  = 'scss/*.scss';
const htmlFiles  = '*.html';
const jsFiles    = ['js/snap.svg.js', 'js/modernizr.js', 'js/app.js'];

gulp.task('sass', function() {
  return gulp.src(stylesheet)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(distFolder))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat(script))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(distFolder))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', function() {
  return gulp.src(imgSrc)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(imgDist));
});

gulp.task('watch', ['browserSync', 'sass', 'scripts', 'images'], function() {
  gulp.watch(scssFiles, ['sass']);
  gulp.watch(htmlFiles, browserSync.reload);
  gulp.watch(jsFiles, ['scripts']);
  gulp.watch(imgSrc, ['images']);
})

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
})
