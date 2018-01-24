'use strict';

var express = require('express');

// according https://www.packtpub.com/mapt/book/web_development/9781785881503/5/ch05lvl1sec37/creating-the-notes-application // notes-memory.js

var tweets = [];
const Tweet = require('./../models/Tweet');

exports.update = exports.create = function(gO) {
    return new Promise((resolve, reject) => {
        //hos to create a id?
        var id = ( (gO['id']!==undefined) && (gO['id']!==null) ) ? gO['id'] : tweets.length; 
        tweets[id] = new Tweet(gO);
        //tweets[id] = new Tweet({text:text, createdOn:createdOn, user:user, user_mentions:user_mentions:, urls:urls, id:id});
        resolve(tweets[id]);
    });
};

exports.read = function(id) {
    return new Promise((resolve, reject) => {
        if (tweets[id]) resolve(tweets[id]);
        else reject(`Tweet ${id} does not exist`);
    });
};

exports.destroy = function(id) {
    return new Promise((resolve, reject) => {
        if (tweets[id]) {
            delete tweets[id];
            resolve();
        } else reject(`Tweet ${id} does not exist`);
    });
};

exports.idlist = function() {
    return new Promise((resolve, reject) => {
        resolve(Object.ids(tweets));
    });
};

exports.count   = function()    {
    return new Promise((resolve, reject) => {
        resolve(tweets.length);
    });
};