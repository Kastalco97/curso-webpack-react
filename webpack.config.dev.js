import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default{
    entry: "./src/index.js",
    output: { // Folder result after the compilation
    path: path.resolve(__dirname, "dist"), //obtain the directory path (local or server)
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // project extentions that webpack should identify
    },
    mode:'development',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use:[
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
}