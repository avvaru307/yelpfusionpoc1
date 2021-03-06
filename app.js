const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config) => {
        let routes = require('./routes');
		 // Set up routes
        routes.init(server);
        // set all the server things
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        
        // add middleware to parse the json
		server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }));
		
		server.use((req,res,next)=> {
			const err = new Error("Not Found");
			err.status = 404;
			next(err);
		});


       
    };

    
    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
        });
    };
    return {
        create: create,
        start: start
    };
};