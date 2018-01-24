'use strict';

const express = require('express');
const router = express.Router();
const Tweet = require('./../models/Tweet');
//const config = require('./../config/config');


router.get('/index', function(req, res, next) { 
    Tweet.keylist()
    .then(keylist => {
        var keyPromises = [];
        for (var key of keylist) {
            keyPromises.push(
                Tweet.readId(key)
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
}); // router.get('/index', function(req, res, next) 

/*
router.route('/:id')
    .get(function (request, response, next) {
        Tweet.findOne({_id: request.params.id}, function (error, event) {
            if (error) {
                return next(error);
            }

            response.render('event/index', {
                title: event.name,
                event: event,
                hasFeedback: event.hasFeedback(request.user),
                userFeedback: event.findUserFeedback(request.user, true)
            });
        });
    })
; */

module.exports = router;
