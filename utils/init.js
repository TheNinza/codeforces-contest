const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
    unhandled();
    welcome({
        title: `codeforces-contest`,
        tagLine: `by Nikhil Gupta`,
        description: `${pkg.description} \nType codeforces-contest --help for more info`,
        version: pkg.version,
        bgColor: '#36BB09',
        color: '#000000',
        bold: true,
        clear
    });
};