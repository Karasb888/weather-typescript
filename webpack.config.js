const path = require('path');
const autoprefixer = require('autoprefixer');

const NODE_ENV = process.env.NODE_ENV;
const ADDITIONAL_PATH = process.env.GITHUB ? '/weather-typescript' : '';

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
        publicPath: `${ADDITIONAL_PATH}/dist/`
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
                            localIdentName: '[name][hash:base64:5]'
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
                        esModule: false,
                        name: 'img/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
};