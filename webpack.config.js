const path = require('path');
const util = require('util');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Cache',
        }),
        new ManifestPlugin({
            generate(seed, files, entryPoints) {
                // console.log(util.inspect(files, false, null, true /* enable colors */))
                fs.writeFileSync( path.resolve( process.cwd(), 'dist/__manifest__webpack.js'), util.inspect(files));
                // util.inspect(entryPoints);
                // default behavior
                return files.reduce( (manifest, file) => {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);
            }
        }),
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //     }
    // }
}