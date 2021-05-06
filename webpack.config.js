const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + 'public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.s?[ac]ss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader", "sass-loader")
        },
        {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        },{
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader'
        }]
    }
}