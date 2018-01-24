'use strict';

module.exports = class Urls {
    constructor(gO) {
        if( (gO!==undefined) && (gO!==null) ) {
            if( (gO['url']!==undefined) && (gO['url']!==null) ) {
                this.url = gO['url'];
            }
            if( (gO['expanded_url']!==undefined) && (gO['expanded_url']!==null) ) {
                this.expanded_url = gO['expanded_url'];
            }
            if( (gO['display_url']!==undefined) && (gO['display_url']!==null) ) {
                this.display_url = gO['display_url'];
            }
        } // if( (gO!==undefined) && (gO!==null) ) 
    } // constructor(gO) 
}; // module.exports = class UserMentions
   