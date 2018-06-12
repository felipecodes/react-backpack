/**
 * Fake implementation of Raven
 * TODO: fix me when on sentry implementation
 * https://docs.sentry.io/clients/node/
 */

const Raven = { captureException: () => 'fake' };

export default Raven;
