
var express = require('express');
var app = express();
//var router = express.Router();



 
/*

const http = require('http'); 
http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain',  
       //'Content-Length': contents.length,
       // 'Accept-Ranges': 'bytes',
       'Cache-Control': 'no-cache'   });
   //process.env.PORT - undefined 
  response.end("Hello, World fdfgfg ggggg \nlistening on port "   );
} ).listen(3000);
//        <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate" />  <!
// <meta http-equiv="PRAGMA" content="NO-CACHE" >
// <meta http-equiv="EXPIRES"  content="0" >
console.log('App is running...');  


console.log( 'Example app listening on port ' + process.env.PORT  );    
*/
//app.disable('view cache'); //https://stackoverflow.com/questions/22632593/how-to-disable-webpage-caching-in-expressjs-nodejs

app.get('/abc', (req, res) => res.send('Hello Worlfffg ') ); 
 
//
//app.listen( 3000 );    
//app.listen( 3000, () => console.log( 'Example app listening on port ' + process.env.PORT ) );   


