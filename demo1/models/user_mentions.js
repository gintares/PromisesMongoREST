'use strict';

module.exports = class UserMentions {
    constructor(gO) {
        if( (gO!==undefined) && (gO!==null) ) {
            if( (gO['screen_name']!==undefined) && (gO['screen_name']!==null) ) {
                this.screen_name = gO['screen_name'];
            }
            if( (gO['name']!==undefined) && (gO['name']!==null) ) {
                this.name = gO['name'];
            }
        } // if( (gO!==undefined) && (gO!==null) ) 
    } // constructor(gO) 
}; // module.exports = class UserMentions
