var express = require('express');
var router = express.Router();

var tweets = require('../comp/genTweets');
var tweetsArr = tweets.t;
//var tweetsMap = T.tm;

console.log(' C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\demo1\routes\index.js,   T='); console.log(tweets);

router.get('/', function(req, res, next) { 
    tweets.keylist()
    .then(keylist => {
        var keyPromises = [];
        for (var key of keylist) {
            keyPromises.push(
                tweets.readId(key)
                .then(tweet => {
                    return { key: key, text: tweet.text, author: tweet.user.name, authorNick : tweet.user.screen_name, mentions: tweet.user_mentions.user_mentions };
                })
            );
        }
        return Promise.all(keyPromises);
    })
    .then(tweetlist => {
        res.render('index', { title: 'IT tweets, simples example of items listing utilizing promises', tweetlist: tweetlist });
    })
    .catch(err => { next(err); });
});


module.exports = router;