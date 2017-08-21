module.exports = {
    entry:{
        main:'./app/main.js'
    },
    output:{
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: '[name].bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                loaders:'babel-loader'
            }
        ]
    }
};