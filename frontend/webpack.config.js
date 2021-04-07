const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?/,
                exclude: /node_modules/, 
                use: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: 3002
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}