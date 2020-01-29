const server = require('./app')();
const appconfig = require('./configs/config/config');

//create the basic server setup 
server.create(appconfig);

//start the server
server.start();