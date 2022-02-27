const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname);

module.exports = {
    mode: 'development',
    context: sourcePath,
    entry: ['./src/index.tsx'],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devtool: 'eval-source-map',
    stats: {
        orphanModules: false
    },
    devServer: {
        allowedHosts: 'all',
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        port: 3000,
        https: true
    }
}