const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/js/index.js',
    },
    output: {
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'assets'),
        port: 5001
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name]-[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'assets', to: 'assets' }
            ]
        })
    ]
}