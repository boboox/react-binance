const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: '[name].js', // 打包后文件
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-2', 'react'],
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    // "style" loader turns CSS into JS modules that inject <style> tags.
                    require.resolve('style-loader'),
                    {
                        // "css" loader resolves paths in CSS and adds assets as dependencies.
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        // "postcss" loader applies autoprefixer to our CSS.
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    {
                        loader: require.resolve('less-loader'),
                        options: {
                            modifyVars: {
                                "@primary-color": "#1890ff"
                            },
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../dist/index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
}
