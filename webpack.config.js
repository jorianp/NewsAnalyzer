const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
module.exports = {
    entry: { 
        main: './src/index.js',
        about: './src/about.js',
        analytics: './src/analytics.js' 
    },
    output: {
        filename: './scripts/[name].[chunkhash].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {loader: "babel-loader"},
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1, sourceMap: true}
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                     'file-loader?name=images/[name].[ext]', // указали папку, куда складывать изображения
                     {
                         loader: 'image-webpack-loader'
                     },
                    ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: `file-loader?name=vendor/fonts/[name].[ext]`
            }
        ]
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: './styles/[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
          }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/about.html',
            filename: 'about.html'
          }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/analytics.html',
            filename: 'analytics.html'
          }),
        new WebpackMd5Hash()
    ]
}