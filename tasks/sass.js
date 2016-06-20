'use strict';

var paths = require('./paths');
var gulp = require('gulp');
var sass = require('gulp-sass');
var bourbon = require('bourbon');
var sourcemaps = require('gulp-sourcemaps');
var types = sass.compiler.types;

var path = require('path');
var fs = require('fs');


var svg = function(buffer) {
    var svg = buffer.toString()
        .replace(/\n/g, '')
        .replace(/\r/g, '')
        .replace(/\#/g, '%23')
        .replace(/\"/g, "'");

    return '"data:image/svg+xml;utf8,' + svg + '"';
};

var img = function(buffer, ext) {
    return '"data:image/' + ext + ';base64,' + buffer.toString('base64') + '"';
};


var _fontTypes = {
    'woff': 'application/font-woff',
    'woff2': 'application/font-woff2',
    'otf': 'font/opentype',
    'eot': 'application/vnd.ms-fontobject',
    'ttf': 'font/truetype'
};


function inlineFontFile(basePath){
    var base = basePath || process.cwd();

    return {
        'inline-font-file($file)': function (file) {
            // we want to file relative to the base
            var relativePath = './' + file.getValue();
            var filePath = path.resolve(base, relativePath);

            // get the file ext
            var ext = filePath.split('.').pop();

            // read the file
            var data = fs.readFileSync(filePath);

            var buffer = new Buffer(data);

            return types.String('"data:' + _fontTypes[ext] + ';base64,' + buffer.toString('base64') + '"');
        }
    }
}


function inlineImage(basePath){
    var base = basePath || process.cwd();
    return {
        'inline-image($file)': function(file){
            // we want to file relative to the base
            var relativePath = './' + file.getValue();
            var filePath = path.resolve(base, relativePath);

            // get the file ext
            var ext = filePath.split('.').pop();

            // read the file
            var data = fs.readFileSync(filePath);

            var buffer = new Buffer(data);
            var str = 'url('+(ext === 'svg' ? svg(buffer, ext) : img(buffer, ext))+')';
            return types.String(str);
        }
    }
}

/**
 *
 * @param pathConfig
 * @returns {Stream}
 */
function compileSass(pathConfig){

    var sassFunctions = {};

    var _sassImg = inlineImage(pathConfig.stylesDir);
    var _sassFont = inlineFontFile(pathConfig.stylesDir);

    [_sassFont, _sassImg].forEach(function(_sassFunctionObj){
        var _key = Object.keys(_sassFunctionObj)[0];
        sassFunctions[_key] = _sassFunctionObj[_key];
    });

    return gulp.src(pathConfig.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({
            functions: sassFunctions,
            includePaths: bourbon.includePaths,
            outputStyle: 'expanded',
            sourceComments: false
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(pathConfig.dest.styles));
}

gulp.task('sass',function () {
    return compileSass(paths.app);
});

gulp.task('sass:watch', function () {
    gulp.watch(paths.app.src.sass, ['sass']);
});
