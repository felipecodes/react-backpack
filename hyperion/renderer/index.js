const debug = require('debug')('hyperion:renderer');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Raven from '../../shared/raven';
import App from '../../src/App';

const renderer = (ctx) => {
  try {
    const app = ReactDOMServer.renderToString(<App />);
    ctx.type = 'html';
    ctx.status = 200;
    ctx.body = app;
  } catch (error) {
    debug(error);
    const sentryId =
      // TODO: fix me when on sentry implementation
      // https://docs.sentry.io/clients/node/
      // eslint-disable-next-line no-constant-condition
      process.env.NODE_ENV === 'production' && false
        ? Raven.captureException(error)
        : 'Only output in production.';

    ctx.throw(500, `Oops, something went wrong. Please try again! (Error ID: ${sentryId})`);
  }
};

export default renderer;
