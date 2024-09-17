import {src, dest, watch} from 'gulp'
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'

const sass = gulpSass(dartSass);

export function css(done){
    src('src/scss/app.scss', {sourcemaps: true})
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('build/css',{sourcemaps: true}))

    done();
}

export function dev(){
    watch('src/scss/**/*.scss', css)
}