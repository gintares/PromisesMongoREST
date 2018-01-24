/*
 * //default generated
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

var t = require('../models/TweetModel');
//var tweetsArr = tweets.tweets;
//var tweetsMap = T.tm;

console.log('************ index.js'); console.log( "t!==undefined=" +  (t!==undefined) );

/**
 * not working from the point then keylist is returned. Hope to finish by the evening of 24th Jan 2018 
 */
router.get( '/', function( req, res, next) { 
    var tweetsArr = [];
    tweetsArr = t.ficturePromise.then(tweetsArr);
    console.log( 'tweetsArr!==undefined=' +  (tweetsArr!==undefined)  ); 
    //undefined console.log( 'tweetsArr.length =' + tweetsArr.length ); 
    console.log(' tweetsArr = ');   console.log(tweetsArr); 
    t.keylist.then( keylist => {
        console.log( 'keylist!==undefined=' +  ( keylist!==undefined) +'   keylist=' ); console.log(keylist); 
        var keyPromises = [];
        /*for (var key of keylist) { 
            keyPromises.push(
                t.readId(key).then( tweet => {
                    return { key: key, text: tweet.text, author: tweet.user.name, authorNick : tweet.user.screen_name, mentions: tweet.user_mentions.user_mentions };
                })
            );
        }*/
        return Promise.all(keyPromises);
    })
    .then(tweetlist => {
        res.render('index', { title: 'IT tweets, simples example of items listing utilizing promises', tweetlist: tweetlist });
    })
    .catch(err => { next(err); });
});


module.exports = router;