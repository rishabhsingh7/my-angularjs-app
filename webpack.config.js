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
            },
            {
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: {
                    loader: 'url-loader?limit=10000',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }
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
