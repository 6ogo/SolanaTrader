const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            'process/browser': require.resolve('process/browser'),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "buffer": require.resolve("buffer/"),
            "vm": require.resolve("vm-browserify")
        },
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: 'single'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            templateContent: ({ htmlWebpackPlugin }) => `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title>Solana Wallet Component</title>
                    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
                    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
                    <script src="https://streamlit.io/stream.js"></script>
                </head>
                <body>
                    <div id="root"></div>
                </body>
                </html>
            `,
            inject: true,
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        process.env.ANALYZE && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};