'use strict';

//text, createdOn, user, user_mentions, urls
module.exports = class Tweet {
    constructor(gO) {
        if( (gO!==undefined) && (gO!==null) ) {
            if( (gO['text']!==undefined) && (gO['text']!==null) ) {
                this.text = gO['text'];
            }
            if( (gO['createdOn']!==undefined) && (gO['createdOn']!==null) ) {
                this.expanded_url = gO['createdOn'];
            }
            if( (gO['user']!==undefined) && (gO['user']!==null) ) {
                this.user = gO['user'];
            }
            if( (gO['user_mentions']!==undefined) && (gO['user_mentions']!==null) ) {
                this.user_mentions = gO['user_mentions'];
            }
            if( (gO['urls']!==undefined) && (gO['urls']!==null) ) {
                this.urls = gO['urls'];
            }
        } // if( (gO!==undefined) && (gO!==null) ) 
    } // constructor(gO) 
}; // module.exports = class UserMentions
 