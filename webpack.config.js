const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [{
            test: require.resolve('flexmonster/flexmonster.js'),
            loader: 'exports-loader?Flexmonster'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Flexmonster: 'flexmonster/flexmonster.js'
        }),
        new CopyWebpackPlugin([
            { from: 'node_modules/flexmonster', to: path.join(__dirname, 'build/flexmonster') }
        ])
    ]
};