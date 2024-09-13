import {src, dest} from 'gulp'
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'

const sass = gulpSass(dartSass);

export function css(done){
    src('src/scss/app.scss')
    .pipe(sass())
    .pipe(dest('build/css'))

    done();
}