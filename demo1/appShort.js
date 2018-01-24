const express = require('express')
const app = express()

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var tweets = require('./comp/genTweets');
var tweetsArr = tweets.t;
//var tweetsMap = T.tm;

console.log(' C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\demo1\routes\index.js,   T='); console.log(tweets);

app.get('/', function(req, res, next) {
    tweets.keylist()
    .then(keylist => {
        var keyPromises = [];
        for (var key of keylist) {
            keyPromises.push(
                tweets.readId(key)
                .then(tweet => {
                    return { key: tweet.key, title: tweet.text, author: tweet.user.name, authorNick : tweet.user.screen_name, mentions: tweet.user_mentions.user_mentions };
                })
            );
        }
        return Promise.all(keyPromises);
    })
    .then(tweetlist => {
        res.render('index', { title: 'IT tweets', tweetlist: tweetlist });
    })
    .catch(err => { next(err); });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
