var http = require('http');

//var server = http.createServer();
//server.on('request',  (req, res) => {
//
//http.createServer(function (req, res) 
http.createServer( (req, res) => {
  res.writeHead( 200, {'Content-Type': 'text/plain'} );
  res.end('Hello, World!\n');
}).listen(8124, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8124');

// to run use $ node appHello.js
//visit browser   http://127.0.0.1:8124  


/*
A question to ponder is why this script did not exit when ls.js did exit. In both cases, execution of the script reaches the end of the script; the Node.js process does not exit in app.js, while in ls.js it does.

The reason is the presence of active event listeners. Node.js always starts up an event loop, and in app.js, the listen function creates an event listener that implements the HTTP protocol. This event listener keeps app.js running until you do something like typing Control-C in the terminal window. In ls.js, there is nothing that creates a long-running event listener, so when ls.js reaches the end of its script, the node process will exit.
 */