const {series, src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

const imgSrc = "static/assets/uploads/**";
const imgSmallDest = "static/assets/uploadsOutSmall";
const imgDest = "static/assets/uploadsOut";
const imgBigDest = "static/assets/uploadsOutBig";

function imagesSmall() {
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
        .pipe(dest(imgSmallDest))
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
            width : 680,
            height: 373,
            crop : true,
            upscale : false
        }))
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
        .pipe(dest(imgBigDest))
}

exports.default = series(minify, imagesSmall, imagesMedium, imagesBig);
exports.imagesSmall = imagesSmall;
exports.imagesMedium = imagesMedium;
exports.imagesBig = imagesBig;
exports.minify = minify;
  