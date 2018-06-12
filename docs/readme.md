# Example App

## Architecture

The architecture of example-app is based on nginx web server as a reverse proxy and a node.js application server that makes server rendering of a React App. See the [architecture's diagram here](diagrams/architecture.md). See the [Jenkins Pipeline example here](jenkins-example.md)

### Application logs and Monitoring

#### Sentry for monitoring

We are using **Sentry** on front-end and back-end. [Sentry](https://sentry.io/welcome/) is a open-source error tracking that helps developers monitor and fix crashes in real time.

#### Logs in development mode

The logs are made using the [debug utility](https://www.npmjs.com/package/debug) that puts content to `stdout` and `stderr`.

### AWS - Images store

Amazon S3?

## Environments

- Development
- Homologation
- Production

## Topics

- http2 protocol
- https/ssl certificate
- batching requests to benchmarking
