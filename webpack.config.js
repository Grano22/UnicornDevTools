const path = require('path');
var glob = require('glob');

module.exports = {
    mode: 'development',
    entry: './UnicornDevTools.ts',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'UnicornDevTools.js',
        path: path.resolve(__dirname, 'prod'),
        library: "UnicornDevTools",
        //libraryTarget: 'umd',
    }
};