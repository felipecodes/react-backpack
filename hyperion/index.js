const debug = require('debug')('hyperion');

debug('Hyperion starting...');
debug('logging with debug enabled');

import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import renderer from './renderer';

const app = new Koa();

if (process.env.NODE_ENV === 'development') {
  app.use(serve(path.join(__dirname, '..', 'dist')));
}

app.use(renderer);

app.listen(process.env.PORT, () =>
  debug(`Hyperion, the server-side renderer, running at http://localhost:${process.env.PORT}`));
