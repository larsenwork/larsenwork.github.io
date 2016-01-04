const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const pngquant = require('imagemin-pngquant');
const inlinesource = require('gulp-inline-source');
const htmlmin = require('gulp-htmlmin');


const distFolder = 'dist';

const htmlSrc = 'src/*.html';

const scssMain = 'src/scss/main.scss';
const scssFiles = 'src/scss/*.scss';
const cssMain = 'dist/main.css';

const imgSrc = 'src/img/*';
const imgDist = 'dist/img';

const favSrc = 'src/fav/*';

const jsMain = 'main.js';
const jsFiles = ['src/js/snap.svg.js', 'src/js/modernizr.js', 'src/js/app.js'];

gulp.task('sass', function() {
  return gulp.src(scssMain)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(distFolder))
});


gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat(jsMain))
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
    .pipe(gulp.dest(imgDist))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('fav', function() {
  return gulp.src(favSrc)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(''));
});

gulp.task('inlinesource', function() {
  return gulp.src('src/*.html')
    .pipe(inlinesource())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }))
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('default', ['sass', 'scripts', 'inlinesource', 'images',
    'browserSync'
  ],
  function() {
    gulp.watch([htmlSrc, cssMain], ['inlinesource']);
    gulp.watch(scssFiles, ['sass']);
    gulp.watch(jsFiles, ['scripts']);
    gulp.watch(imgSrc, ['images']);
  }
);
