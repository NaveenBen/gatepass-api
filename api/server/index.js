const Express = require('express');
const router = require('./routes');
const server = Express();

server.use(Express.json());

server.use('/api',router);

module.exports = server;