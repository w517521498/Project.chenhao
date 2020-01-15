const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: "./src/script/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "script/bundle.js"
    },
    module: {
        rules: [{
                //加载jquery
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index1.html",
            template: "./src/index1.html",
            chunks: ["index", "vendor"],
            minify: { //压缩html
                removeComment: true, //去掉注释
                collapseWhitespace: true //去掉空格。
            }
        }),
    ]
};