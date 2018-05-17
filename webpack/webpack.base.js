import path                  from 'path';
import webpack               from 'webpack';
import loaderUtils           from 'loader-utils';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import HtmlWebpackPlugin     from 'html-webpack-plugin';

const devMode = process.env.NODE_ENV !== 'production'

export default function webpackBase(options = {}) {
  const paths = {
    app: path.resolve(__dirname, '../src/app'),
    assets: path.resolve(__dirname, '../src/assets'),
    dist: path.resolve(__dirname, '../dist'),
  };

  const entry = {
    app: [
      path.join(paths.app, 'app.js')
    ]
  };

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
    chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
  });

  return {
    entry,
    mode: 'development',
    output: {
      path: paths.dist,
      filename: 'js/[name].bundle.js',
    },
    resolve: {
      alias: {
        '@': paths.app,
        '~assets': path.resolve(paths.assets),
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          }
        },
        {
          test: /\.styl$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: true,
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
                importLoaders: 2,
                getLocalIdent(loaderContext, localIdentName, localName, options) {
                  if (loaderContext.resourcePath.match(/components/)) {
                    if (!options.context) {
                      options.context = loaderContext.options
                        && typeof loaderContext.options.context === 'string'
                        ? loaderContext.options.context
                        : loaderContext.context;
                    }

                    let request = path.relative(options.context, loaderContext.resourcePath);
                    options.content = options.hashPrefix + request + '+' + localName;
                    localIdentName = localIdentName.replace(/\[local\]/gi, localName);
                    let hash = loaderUtils.interpolateName(loaderContext, localIdentName, options);

                    return hash
                      .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
                      .replace(/^((-?[0-9])|--)/, '_$1');
                  }

                  return localName;
                }
              },
            },
            {
              loader: 'stylus-loader',
              options: {
                use: [],
                preferPathResolver: 'webpack',
              },
            },
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?[a-z0-9=\.]+)?$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: 'assets/imgs/[name].[ext]?[hash]',
              publicPath: '/'
            }
          }]
        },
      ]
    },
    plugins: [
      miniCssExtractPlugin,

      new HtmlWebpackPlugin({
        template: path.resolve(paths.app, 'index.html'),
        inject: true,
        hash: true,
        // chunks: ['vendors', 'app']
      }),
    ]
  };
};
