const {series, src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

exports.default = minify;
  