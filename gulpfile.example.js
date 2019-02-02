const g = require('gulp');
const print = require('gulp-print').default;

const e = require('@zebrajaeger/gulp-simple-env')({env: ['foo', 'bar']});

// prints the files if '--foo' can be found as command line parameter for gulp
g.task('default', cb => {
    return g
        .src('*.js')
        .pipe(e.isFoo(print()))
});
