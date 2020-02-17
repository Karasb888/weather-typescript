const path = require('path');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV,

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(scss|css)$/, 
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
                    },
                    require.resolve('sass-loader'),
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [ autoprefixer ]
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    }
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
};