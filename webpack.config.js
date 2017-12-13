module.exports = {
    entry: "./js/main.jsx",
    output: { filename: "./app/app.js" },
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
                test: /\.css$/,
                loaders: ['css-loader', 'style-loader']
            }
        ]
    }
};