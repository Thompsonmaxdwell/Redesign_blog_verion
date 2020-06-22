// configure webpack

const path =  require('path');

module.exports = {
    mode : 'development',
    entry : "./public/js/index.js",

    output: {
        path: path.resolve(__dirname, 'bundler/js'),
        filename : "bundle.js"
    

    }
}