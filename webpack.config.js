const path = require('path-browserify');

module.exports = {
    mode: 'development',
    entry: './src/js/',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'dist/js/'),
        publicPath: 'dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    '/node_modules/',
                    '/test/',
                    '/utils/',
                    path.resolve(__dirname, 'app.js')
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js'],
        fallback: {
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            // console: require.resolve('console-browserify'),
            // constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            // domain: require.resolve('domain-browser'),
            // events: require.resolve('events'),
            // fs: require.resolve('fs'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            // punycode: require.resolve('punycode'),
            // process: require.resolve('process/browser'),
            // querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            // string_decoder: require.resolve('string_decoder'),
            // sys: require.resolve('util'),
            // timers: require.resolve('timers-browserify'),
            // tty: require.resolve('tty-browserify'),
            // url: require.resolve('url'),
            util: require.resolve('util'),
            // vm: require.resolve('vm-browserify'),
            zlib: require.resolve('browserify-zlib')
        }
    },
    node: {
        global: true,
        __filename: false,
        __dirname: false
    }
};
