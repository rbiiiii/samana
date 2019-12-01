const {series, src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");
const rename = require("gulp-rename");

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

const imgSrc = "static/assets/uploads/**";
const imgDest = "static/assets/uploadsOut";

function images() {
    return src(imgSrc)
        .pipe(gulpNewer(imgDest))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 80
            }),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulpImageresize({
            width : 326,
            height : 179,
            crop : true,
            upscale : false
          }))
        .pipe(dest(imgDest))
}

function imagesMedium() {
    return src(imgSrc)
        .pipe(gulpNewer(imgDest))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 80
            }),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulpImageresize({
            width : 768,
            height: 421,
            crop : true,
            upscale : false
        }))
        .pipe(rename(function (path) { path.basename += "-medium"; }))
        .pipe(dest(imgDest))
}

function imagesBig() {
    return src(imgSrc)
        .pipe(gulpNewer(imgDest))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 80
            }),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulpImageresize({
            width : 1440,
            height: 790,
            crop : true,
            upscale : false
        }))
        .pipe(rename(function (path) { path.basename += "-big"; }))
        .pipe(dest(imgDest))
}

exports.default = series(minify, images, imagesMedium, imagesBig);
exports.images = images;
exports.imagesMedium = imagesMedium;
exports.imagesBig = imagesBig;
exports.minify = minify;
  