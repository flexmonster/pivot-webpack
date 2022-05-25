const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devServer: {
        static: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};