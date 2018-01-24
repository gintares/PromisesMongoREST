
var express = require('express');
var app = express();


app.disable('view cache'); //https://stackoverflow.com/questions/22632593/how-to-disable-webpage-caching-in-expressjs-nodejs

app.get('/', (req, res) => res.send('Hello World! aaaaa ')); 

app.listen( process.env.PORT, () => console.log( 'Example app listening on port ' + process.env.PORT ) ); 

//app.listen( 3000, () => console.log( 'Example app listening on port ' + process.env.PORT ) );
