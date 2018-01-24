'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('**********'); 
console.log(' from C:\Bitnami\wampstack-7.0.23-0\apache2\htdocs\cood180119\projExpress1\mongoTweets\models\UserModel.js Schema not undeifined' + (Schema!==undefined) ); 

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    screen_name: { type: String, unique: true },
    location: { type: String, unique: false },
    description : { type: String, unique: false },
    url: { type: String, unique: false },
});
//tw = {  "text":txt, "createdOn":rd, "user":ur, "user_mentions":um, "urls":ur  } 
//    user.name = name; 
//    user.screen_name = screen_name; 
//    user.location = locs [ Math.floor(Math.random()*this.length) ] ;
//    user.description = "";
//    user.url = "";

module.exports = mongoose.model('UserModel', userSchema );