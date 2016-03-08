'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');


module.exports = {
    context: __dirname + "/frontend",
    entry: {
        app: "./app"
    },

    output: {
        path: __dirname + "/public",
        publicPath: "",
        filename: "[name].js"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    /// FOR dev devtool: "eval"
    // devtool: NODE_ENV == 'development' ? "source-map" : null,
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extension: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: '8080'
    }
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}