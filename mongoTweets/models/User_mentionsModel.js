'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user_mentionsSchema = new mongoose.Schema({
    screen_name: { type: String, unique: true },
    user_mentions: { type: String },
    urls: { type: String, unique: false },
});
    //user_mentions
    //um = {}; 
    //um.screen_name = screen_name;
    //um.user_mentions = "user_mentions";
    //um.urls = ""; 
    //user_mentions.push(um);

module.exports = mongoose.model('User_mentionsModel', user_mentionsSchema );