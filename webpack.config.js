const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./client/index.js'],
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: '/',
        hot: true
      },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test:/\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(jpe?g|png|gif|mp3)$/i,
            loader: ['file-loader']
        },]
    }
}