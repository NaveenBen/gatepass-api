const Express = require('express');
const router = require('./routes');
const server = Express();

server.use(Express.json());

server.use('/cd ..api',router);

module.exports = server;