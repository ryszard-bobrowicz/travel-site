var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
cssnest = require("postcss-nested");

gulp.task('default', function() {
  console.log("Hoooray");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/css/style.css')
    .pipe(postcss([cssvars, cssnest, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  })

  watch('./app/assets/css/**/*.css', function(){
    gulp.start('styles');
  })
})
