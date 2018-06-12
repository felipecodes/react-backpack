const debug = require('debug')('hyperion');

debug('Hyperion starting...');
debug('logging with debug enabled');

import Koa from 'koa';
import renderer from './renderer';

const app = new Koa();

app.use(renderer);

app.listen(process.env.PORT, () =>
  debug(`Hyperion, the server-side renderer, running at http://localhost:${process.env.PORT}`));
