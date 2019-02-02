const camelCase = require('camelcase');
const through2 = require('through2');

module.exports = cfg => {

    if (!cfg.env) {
        throw new Error('myenv: env is required in config');
    }

    let x = {};
    cfg.env.forEach(e => {
        let is = process.argv.includes('--' + e);
        let name = camelCase(e, {pascalCase: true});

        x['is' + name] = (trueStream, falseStream) => {
            if (trueStream) {
                return is ? trueStream : falseStream || through2.obj();
            } else {
                return is;
            }
        };

        x['isNot' + name] = (trueStream, falseStream) => {
            if (trueStream) {
                return !is ? trueStream : falseStream || through2.obj();
            } else {
                return !is;
            }
        };
    });

    return x;
};
