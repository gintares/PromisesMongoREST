'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise

var Schema = mongoose.Schema;
var Promise = require('es6-promise').Promise;

//import Movie from '../models/movie'; // react
//var UserModel = require( '../models/UserModel' ); //Epress  User = require("./user.js")
var UserModel = require('./UserModel') ;
//console.log( UserModel ); 
var User_mentionsModel = require('./User_mentionsModel') ;
var UrlsModel = require('./UrlsModel') ;
console.log( 'UserModel!==undefined=' +  (UserModel!==undefined)  ); 
console.log( 'User_mentionsModel!==undefined=' +  (User_mentionsModel!==undefined)  ); 
console.log( 'UrlsModel!==undefined=' +  (UrlsModel!==undefined)  ); 

const tweetSchema = new mongoose.Schema({
    text: { type: String, unique: false },
    reatedOn: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    user_mentions : { type: String, unique: false },
    urls : { type: String, unique: false }
});
var TweetModel = mongoose.model( 'TweetModel', tweetSchema );
//tw = {  "text":txt, "createdOn":rd, "user":ur, "user_mentions":um, "urls":ur  } 
exports.TweetModel = TweetModel;



var qArr = require('../comp/quatesO'); //quatesArr with tweet body and author name 
// console.log(qArr.q[0]);  

// generateTweetPromise 
//seems it is enough save method on the model in order to write to database 
var tweetsArr = [];
//error, can not set property fixt of undefined //tweetSchema.prototype.fixt = function gTP() { 
    
// exports.fixture = function () { return new Promise( function(tweetsArr, reject) 
//exports.fict = gTP.then( function (tweetsArr){} )
//        .catch( function (error) { console.log(error.message); } )  
//gives warning that mongoose promise is deprecated 
exports.ficturePromise = new Promise( function( resolve, reject) {

        //console.log( ' from exports.ficturePromise = new Promise C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js ')
        var locs = [ 'UK', 'FR', 'SE', 'GE', 'IT', 'SP', 'NL' ]; 
        //var tweetsArr = [];  //passed to be resolved 
        //var users = []; var user_mentions = []; var urls = {}; 
        var user, um, name, screen_name, start, end, ur, rd, txt; 
        var ObjectID = require('mongodb').ObjectID;
        
        //cnt = 0; 
        //console.log( 'qArr.q.length=' +  qArr.q.length  ); 
        for ( let qi of qArr.q ) {
            //console.log( 'qi=' ); console.log(qi);
            name = qi.author;
            screen_name = name.split(' ').map( function(v) {  var s = v.substring(0,3);  return (s.length < 3 ? v : s); }).join('');  

            var user = new UserModel({
                name : name,
                screen_name : screen_name,
                location : locs [ Math.floor(Math.random()* locs.length) ],
                description : "",
                url : ""
            }); 
            
            //console.log( 'mvcvmcvmmcvm   user!==undefined=' +  (user!==undefined)  ); 
            user.save(function (err) {
              if (err) return handleError(err);
              // saved!
            }); 
            //console.log( 'user._id=' +  user._id ); 
            
            
            //users.push(user); 
            //console.log( 'C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\controllers\Tweet.js,  user.screen_name = ' ); console.log( user.screen_name ); 

            //user_mentions
            var um = new User_mentionsModel({  
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

            var ur = new UrlsModel ({  
                url : "",
                expanded_url : "",
                display_url : "",
                //id : cnt
            }); 
            ur.save(function (err) {
              if (err) return handleError(err);
              // saved!
            });
            //console.log( 'ur!==undefined=' +  (ur!==undefined)  ); 

            txt = qi.body; 
            start = new Date(2012, 0, 1);  
            end = new Date(2018, 0, 1); 
            rd = new Date( start.getTime() + Math.random() * (end.getTime() - start.getTime()));

            var tw = new TweetModel ({ 
                //"id":cnt,  
                "text":txt, 
                "createdOn":rd, 
                "user":user._id, 
                "user_mentions":um._id, 
                "urls":ur._id 
            });
            tw.save(function (err) {
              if (err) return handleError(err);
              // saved!
            });
            //console.log( 'tw!==undefined=' +  (tw!==undefined) +' tw._id='+tw._id ); 
            tweetsArr.push(tw._id);
            //cnt++; 

        } // for ( let qi of qArr.q )      
        //console.log(' tweetsArr = ');   console.log(tweetsArr); 
        resolve(tweetsArr);
        //if(err) { console.log('ERROR from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js' + err.message ); console.log(err) reject(err); }
    //}); 
    
});
//can not catch because catches warning 
//.catch( function (error) { console.log(error.message); } )   ;

var MongoClient = require('mongodb').MongoClient;
var Promise = require('es6-promise').Promise;
var connectionUrl = 'mongodb://localhost:27017/myproject';// smCol = 'tweetsIT';



var mongoConnPromise = new Promise( function(resolve, reject) {
    
    MongoClient.connect( connectionUrl, function (err, client) {
        if(err) reject(err);
        var db = client.db('tweetsdb'); 
        //console.log(' db=');   console.log(db); 
        resolve(db);
    }); // MongoClient.connect(connectionUrl, function (err, client)      
    
});

//exports.keylist = function() { 
//var items = []; 
//exports.keylist = new Promise( function(resolve, reject) { 
    
exports.keylist = new Promise( function(resolve, reject) { 
    
    //items = function(req, res, next) {
        var query = TweetModel.find( {},'_id', function (err, tweets ) {
            if(err) { console.log('ERROR from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js' + err.message ); } 
            else { console.log('tweets from find = ');  console.log(tweets); return tweets.toArray(); } 
        });
        console.log('query***************************query');  console.log(query);
        var items = query.exec( function (err, tweets ) {
            if(err) { console.log('ERROR from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js' + err.message ); } 
            else { 
                console.log('items***************************tweets');  console.log(tweets);
                return tweets;
            }
        });
        console.log('items***************************items');  console.log(items);
             
        //items = res.json(tweets);
           // return items; 
            //if (err) return next(err);
        //} );
    //}; 

    resolve([]);
}); // exports.keylist =new Promise( function(resolve, reject) { 
         
         /*
exports.keylistOLD = mongoConnPromise.then( function(db) { 

        return new Promise( (result, reject) => {
            console.log(' exports.keylist,   from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js, exports.keylist  ');
            
            //find() method returns the cursor 
            //The toArray() method returns an array that contains all the documents from a cursor. The method iterates completely the cursor, loading all the documents into RAM and exhausting the cursor.
            //console.log( ' db.collection(mongodb) !== null ' + (db.collection('mongodb') !== null) )
            //console.log( ' db.collection(mongodb).find() !== null ' + (db.collection('mongodb').find({}) !== null) )
            //var query = db.collection('mongodb').find({}); //.select('_id');//.toArray();
            var query = TweetModel.find({}).select('_id');
            //resolve = res
            items = query.exec( function (err, someValue) {
                if(err) { console.log('ERROR from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js' + err.message ); }
                //if (err) return next(err);
                //resolve.send(someValue);
            });
            console.log('items');  console.log(items);
            resolve(items);
        }); // mongoConnPromise().then( function(db) 
    
    }); // exports.keylist = new Promise( function(resolve, reject) 
    //console.log('items before return ');  console.log(items);
    //resolve(items); 
//});  // exports.keylist = new Promise( function(resolve, reject) 
                    //.toArray( function(err, items) {
              //  if(err) { console.log('ERROR from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\TweetModel.js' + err.message ); 
                    //reject(err); 
               // }
               // return items; 
                //callback(err, posts);
            });
            //var items = TweetModel.find(); //function (err) {
              //if (err) return handleError(err);
                //console.log(items);
                //return items; 
            //})

// ) // exports.keylist = function() 

*/

//does not work on const, 
exports.readId = function(id) {
    
    return new Promise( (resolve, reject) => {
        var tweet = TweetModel.findById( function (err, item) { if (err) return handleError(err); return item; } );
        resolve(tweet); 
    }); 
    
}; //exports.readId = function(id) 





//var MongoClient = require('mongodb').MongoClient;
//var connectionUrl = 'mongodb://localhost:27017/myproject';// smCol = 'tweetsIT';



