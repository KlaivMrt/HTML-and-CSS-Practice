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
        filename: "scripts/[name].js"
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
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            //TODO: search for a way to organise the images to a file
            {
                test: /[\.(jpg|png)]$/,
                use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",   // keep the original name and extention
                        outputPath: "img/",     // specifies the outputfile
                        publicPath: "img/"  // specifies the source file of the images
                    }
                },
                // {
                //     loader: "url-loader",
                //     options: {
                //         name: "[name].[ext]",   // keep the original name and extention
                //         outputPath: "img/",     // specifies the outputfile
                //         publicPath: "src/img/"  // specifies the source file of the images
                //     }
                // }
            ]
            }
        ]
    },
    plugins: [].concat(
        ["index", "about", "contact"].map( (file) => 
            new htmlWebpackPlugin({
                inject: true,
                filename: `${file}.html`,           // the file that will be generated
                template: `./src/${file}.html`,     // the source of that file
                chunks: [file]                      // the js files that will be included within that file
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