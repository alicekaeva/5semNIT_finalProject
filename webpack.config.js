const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports ={
    entry: './f_file.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [new HtmlWebpackPlugin({title: "Все мои домашечки"}, )],
    mode: 'production',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};