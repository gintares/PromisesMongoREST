const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello, World!\n");
}).listen(process.env.PORT);

console.log('App is running...');

//C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\demo1\appAnd1Hello.js