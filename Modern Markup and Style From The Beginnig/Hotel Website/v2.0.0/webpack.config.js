const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "src/js/Home.js"),
        about: path.resolve(__dirname, "src/js/About.js"),
        contact: path.resolve(__dirname, "src/js/Contact.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            // {
            //     test: /[\.jpg]$/,
            //     use: ["file-loader"]
            // }
        ]
    },
    plugins: [].concat(
        ["index", "about", "contact"].map( (file) => 
            new htmlWebpackPlugin({
                inject: true,
                filename: `${file}.html`,
                template: `./src/${file}.html`,
                chunks: [file]
            })
        )
    )
    
    // plugins: [
    //     new htmlWebpackPlugin({
    //         inject: true,
    //         title: "Home",
    //         filename: "index.html",
    //         template: "./src/index.html",
    //         chunks: ["bundle"]
    //     }),
    //     new htmlWebpackPlugin({
    //         inject: true,
    //         title: "About",
    //         filename: "about.html",
    //         template: "./src/about.html",
    //         chunks: ["bundle"]
    //     })
    // ]
}