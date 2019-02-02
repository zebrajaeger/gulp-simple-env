# gulp-simple-env

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]

## Define your environments
I.E. we define two environments: 'foo' and 'bar'.

    const e = require('@zebrajaeger/gulp-simple-env')({
        env: ['foo', 'bar']
    });

You can define as much environments as you want.

Hint:

For js-conform naming, the env-names are camel-cased. 'my-great-env' becomes to isMyGreatEnv(...). 
The command line name is unchanged: gulp --my-great-env
For the replacement strategy, take a look at https://www.npmjs.com/package/camelcase 

## Activate environment through command line argument(s)

    gulp --foo
    gulp --bar
    gulp --foo --bar

## Generic: Check if a specific environment is (not) set

    e.isFoo(): true or false 
    e.isNotFoo(): true or false
    e.isBar(): true or false 
    e.isNotBar(): true or false

## Gulp: Execute tasks dependent from environment

    gulp.src(...).pipe( e.isFoo(...) ).dest(...);
    gulp.src(...).pipe( e.isNotFoo(...) ).dest(...);
    gulp.src(...).pipe( e.isBar(...) ).dest(...);
    gulp.src(...).pipe( e.isNotBar(...) ).dest(...);

As an alternative you can provide a trueStream and a falseStream

    .pipe( e.isFoo(uglify(), prettify()) )

## Your example gulpfile.js

    const g = require('gulp');
    const e = require('@zebrajaeger/gulp-simple-env')({env: ['foo', 'bar']});
    
    const print = require('gulp-print').default;
    
    g.task('default', cb => {
        return g
            .src('*.js')
            .pipe(e.isFoo(print()))
    });

[npm-image]: https://img.shields.io/npm/v/@zebrajaeger/gulp-simple-env.svg?style=flat
[npm-url]: https://npmjs.org/zebrajaeger/gulp-simple-env

[license-image]: https://img.shields.io/github/license/zebrajaeger/gulp-simple-env.svg?style=flat
[license-url]: https://github.com/zebrajaeger/gulp-simple-env/blob/master/LICENSE.txt
