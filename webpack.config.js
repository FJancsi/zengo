const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const DIST_PATH = './build/';

module.exports = {
    entry: {
        build: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, DIST_PATH),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },            
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(
            {exclude: /node_modules/}
        ),/*
        new CopyWebpackPlugin([
            { from: 'src/assets/images', to: 'images' }
        ]),*/
        new VueLoaderPlugin()
    ]
};