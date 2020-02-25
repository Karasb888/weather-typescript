const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
            const compilerOptionsFixed = Object.assign({}, tsConfig.compilerOptions);
            compilerOptionsFixed.module = 'commonjs';
            return tsc.transpile(src, compilerOptionsFixed, path, []);
        }
        return src;
    }
};