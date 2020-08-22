const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                        'style-loader', //3. INject style into DOM
                        'css-loader',  //2 . Turn css into commonJs
                        'sass-loader'  //1. Turn Sass into css
                    ]
            }
        ]
    },
    plugins : [new HtmlWebpackPlugin({
                    template : './src/template.html'
            })
    ]
};