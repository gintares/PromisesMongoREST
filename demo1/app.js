var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var users = require('./routes/users');

var tweets = require('./comp/genTweets');

var app = express();

// view engine setup
app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'ejs' );

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use( function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use( function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




/* node way
var http = require('http'); 
 * 
//var server = http.createServer();
//server.on('request',  (req, res) => {
//
//http.createServer(function (req, res) 
http.createServer((req, res) => {
  res.writeHead( 200, {'Content-Type': 'text/plain'} );
  res.end('Hello, World!\n');
}).listen(8124, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8124\n\
*/
/* Express way : 
app.get('/', function(req, res, next) {
    res.render('index', );
});
*/
// to run use $ node appHello.js
//visit browser   http://127.0.0.1:8124  
 
//module.exports = app;   
//app.listen( process.env.PORT, () => console.log( 'Example app listening on port ' + process.env.PORT ) );   

app.listen( 3000, () => console.log('Example app listening on port 3000!'))