const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname,
            "./build"), // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js" // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname,
                "/"),
        },
        port: 8081,
        open: true
    },
    module: {
        rules: [ //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: "babel-loader", // определяем загрузчик
                options: {
                    presets: [
                        "@babel/preset-react"
                    ] // используемые плагины
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    }
}