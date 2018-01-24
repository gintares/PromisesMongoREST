'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const tweetSchema = new mongoose.Schema( {
    text: { type: String, unique: false },
    reatedOn: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    user_mentions : { type: String, unique: false },
    urls : { type: String, unique: false }
} );
//tw = {  "text":txt, "createdOn":rd, "user":ur, "user_mentions":um, "urls":ur  } 
var TweetModel = mongoose.model( 'Tweet', tweetSchema );
//exports.Tweet = mongoose.model('Tweet', tweetSchema );
//module.exports = mongoose.model('Tweet', tweetSchema );
/*
t.keylist = function() {
    return new Promise((resolve, reject) => {
        var tweetsArr = t.find({});
        resolve(Object.keys(tweets));
    });
}; */


var MongoClient = require('mongodb').MongoClient;
var Promise = require('es6-promise').Promise;
var connectionUrl = 'mongodb://localhost:27017/myproject';// smCol = 'tweetsIT';

var mongoConnPromise = new Promise( function(resolve, reject) {
    
    MongoClient.connect( connectionUrl, function (err, client) {
        if(err) reject(err);
        var db = client.db('tweetsdb'); 
        resolve(db);
    }); // MongoClient.connect(connectionUrl, function (err, client)      
    
});

var qArr = require('../comp/quatesO'); //quatesArr with tweet body and author name 
console.log(qArr.q[0]);  

// generateTweetPromise 
//seems it is enough save method on the model in order to write to database 
var gTP = new Promise( function(tweetsArr, reject) {
    
    var locs = [ 'UK', 'FR', 'SE', 'GE', 'IT', 'SP', 'NL' ]; 
    var tweetsArr = []; var users = []; var user_mentions = []; var urls = {}; 
    var user, um, name, screen_name, start, end, ur, rd, txt; 
    
    //cnt = 0; 
    for ( let qi of qArr.q ) {
        name = qi.author;
        screen_name = name.split(' ').map( function(v) {  var s = v.substring(0,3);  return (s.length < 3 ? v : s); }).join('');  

        var user = new User({
            name : name,
            screen_name : screen_name,
            location : locs [ Math.floor(Math.random()*this.length) ],
            description : "",
            url : ""
        }); 
        user.save(function (err) {
          if (err) return handleError(err);
          // saved!
        });
        //users.push(user); 
        //console.log( 'C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\controllers\Tweet.js,  user.screen_name = ' ); console.log( user.screen_name ); 

        //user_mentions
        var um = new User_mentions({  
            screen_name : screen_name,
            user_mentions : "user_mentions",
            urls : ""
            //id = cnt;
        }); 
        um.save(function (err) {
          if (err) return handleError(err);
          // saved!
        });
        // user_mentions.push(um);

        var ur = new Urls ({  
            url : "",
            expanded_url : "",
            display_url : "",
            //id : cnt
        }); 
        ur.save(function (err) {
          if (err) return handleError(err);
          // saved!
        });
        
        txt = qi.body; 
        start = new Date(2012, 0, 1);  
        end = new Date(2018, 0, 1); 
        rd = new Date( start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        
        var tw = new Tweet ({ 
            //"id":cnt,  
            "text":txt, 
            "createdOn":rd, 
            "user":user.id, 
            "user_mentions":um.id, 
            "urls":ur.id 
        });
        tw.save(function (err) {
          if (err) return handleError(err);
          // saved!
        });
        tweetsArr.push(tw.id);
        //cnt++; 

    } // for ( let qi of qArr.q )      
    //console.log(' tweetsArr = ');   console.log(tweetsArr); 
    resolve(tweetsArr);
    if(err) reject(err);
    
});



/*
var tweets = [];  var tweets2 = [];
tweets = gTP.then ( function(tweetsArr) { 
    tweets2 = tweetsArr; 
    //console.log(' gt.tech tweets='); console.log(tweets); 
} );
console.log(' C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\controllers\Tweet.js,   after gt.then t.tweets='); console.log(tweets2); 
exports.tweets = tweets;
*/




TweetModel.prototype.keylist = function() {
    return new Promise( (resolve, reject) => {
        items = Tweet.find(function (err, items) {
          if (err) return console.error(err);
          console.log(items);
          return items; 
        })
        /* db = mongoConnPromise.then(); 
        var tweetsCollection = db.collection('tweetsdb'); 
        var items = tweetsCollection.find().toArray( function(err, items) {
            return JSON.stringify(items);
        }); */
        resolve(items); 
        //var idArr = tweets.map( function(v) { return v.id; });
        //idArr = Object.keys(tweetsArr); 
        //resolve(idArr); 
        //resolve(Object.keys(tweets));
    }); 
}; // exports.keylist = function() 

TweetModel.prototype.readId = function(id) {
    
    return new Promise( (resolve, reject) => {
        var tweet = Tweet.findById( id );
        /*
        db = mongoConnPromise.then(); 
        var tweetsCollection = db.collection('tweetsdb'); 
        var query = tweetsCollection.find({ id:id });
        var promise = query.exec();
        var tweet = promise.toArray( function(err, item) {
            return JSON.stringify(item);
        }); 
        console.log('tweet['+id+']='); console.log(tweet); 
        */
        resolve(tweet); 
        //var idArr = tweets.map( function(v) { return v.id; });
        //idArr = Object.keys(tweetsArr); 
        //resolve(idArr); 
        //resolve(Object.keys(tweets));
    }); 
    
}; //exports.readId = function(id) 

TweetModel.prototype.fixture = gTP.then(tweetsArr); 


/* seems it is enough to save the model, no need to open mongoCOnn
t.fixture  = function () {
    
    gt = gTP();
    var tweetsArr = gt.then ( function(tweetsArr) { 
        //console.log('tweetsArr='); console.log(tweetsArr); 
        mc = mongoConnPromise();
        mc.then( function(db) { 
            db.collection('mongodb').insert( tweetsArr , function(error,result) {    
                //here result will contain an array of records inserted 
                if(!error) { 
                    console.log("Success :"+result.ops.length+" chapters inserted!"); 
                } else { 
                    console.log("Some error was encountered!"); 
                }    
                //MongoDB v2 db.close();   
                client.close(); 
            });   
        }); //mc.then
    }); //gt.then ( function(tweetsArr)

}; // t.fixture  = function ()
*/

module.exports = TweetModel;


