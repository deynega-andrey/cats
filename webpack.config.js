const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader' 
            },
            {
                test: /\.(svg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]'
                    }
                    
                }]
            },
            {
                test: /\.otf$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                    
                }]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    name: '[name].pug',
                },
            },
            {
                test: /\.(s[ca]ss)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.pug'
        })
    ],

    devServer: {
        open: true
    }
}