const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: [
        "./example/index.tsx",
    ],

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Demo',
            chunksSortMode: 'dependency',
            template: path.resolve(__dirname, './example/index.ejs')
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: [
                    "awesome-typescript-loader",
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: [
                    path.resolve(__dirname, "src"),
                    __dirname
                ]
            },
            // Other content is loader by url-loader
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    devServer: {
        hot: true
    },
    performance: {
        hints: false
     }
};