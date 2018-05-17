// import express              from 'express';
import opn                  from 'opn';
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import server               from '../src/server';
import webpackConfig        from './webpack.dev';

const webpackCompiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  stats: { colors: true },
});
const hotMiddleware = webpackHotMiddleware(webpackCompiler, {
  log: () => {},
});

server.app.use(devMiddleware);

server.app.use(hotMiddleware);

devMiddleware.waitUntilValid(() => {
  opn(`http://localhost:${server.PORT}`);
});

server.run();
