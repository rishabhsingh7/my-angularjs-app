var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: './client/app/app.module.js',
    output: {
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' }
            },
            {
                test: /\.scss$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            inject: 'body'
        }),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 3000,
        hot: true
    },
    devtool: 'inline-source-map'
};
