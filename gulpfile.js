var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require("browser-sync").create();


// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: '.'
    });
    gulp.watch(['*.html', 'style.css', 'dist.js']).on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src(['style.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('.'))
});

const rollup = require('rollup');
const rollupBabel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');

gulp.task('rollup', () => {
  return rollup.rollup({
    input: 'main.js',
    plugins: [
      rollupBabel({
        exclude: 'node_modules/**'
      }),
      uglify.uglify(),
    ]
  }).then(bundle => {
    return bundle.write({
      file: './dist.js',
      format: 'cjs',
      name: 'library',
      sourcemap: true
    });
  });
});

//Watch task
gulp.task('watch-scss',function() {
  gulp.watch(['*.scss'], ['styles']);
});

gulp.task('watch-js',function() {
  gulp.watch(['*.js', '!dist.js'], ['rollup']);
});

gulp.task('watch', ['watch-scss','watch-js'])

gulp.task('default', ['serve', 'watch']);

var gulp = require("gulp");