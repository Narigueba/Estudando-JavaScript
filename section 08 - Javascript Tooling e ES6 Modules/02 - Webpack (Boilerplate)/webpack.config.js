const path = require('path'); // CommonJS

module.exports = {
    mode: 'development', 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    }
}