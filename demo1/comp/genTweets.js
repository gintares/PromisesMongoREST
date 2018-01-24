var qArr = require( './quatesO' ); //quatesArr with tweet body and author name 
console.log( qArr.q[0] ); 


var locs = [ 'UK', 'FR', 'SE', 'GE', 'IT', 'SP', 'NL' ]; 
var tweets = []; var users = []; var user_mentions = []; var urls = {}; 
var user, um, name, screen_name, start, end, ur, rd, txt; 

for ( let qi of qArr.q ) {

    name = qi.author;
    screen_name = name.split(' ').map( function(v) {  var s = v.substring(0,3);  return (s.length < 3 ? v : s); }).join('');  
    
    user = {};
    user.name = name; 
    user.screen_name = screen_name; 
    user.location = locs [ Math.floor(Math.random()*this.length) ] ;
    user.description = "";
    user.url = "";
    users.push(user); 
    console.log( 'user.screen_name = ' ); console.log( user.screen_name ); 
    
    //user_mentions
    um = {}; 
    um.screen_name = screen_name;
    um.user_mentions = "user_mentions";
    um.urls = ""; 
    user_mentions.push(um);
    
    ur ={}; 
    ur.url = "";
    ur.expanded_url = "";
    ur.display_url = "";
    
    txt = qi.body; 
    start = new Date(2012, 0, 1);  end = new Date(2018, 0, 1); 
    rd = new Date( start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    tw = {  "text":txt, "createdOn":rd, "user":ur, "user_mentions":um, "urls":ur  } 
    tweets.push(tw);

} // for ( let qi of qArr.q )

var tweetsMap = {};

for( let t of tweets ) {
    var ka = Object.keys(t); //0,1,2,
    for( let k of ka ) {
        v = t[k]; 
        if ( v !== null && typeof v === 'object' ) {
            var ka2 = Object.keys(v); //text, user, urls ...
            for( let k2 of ka2 ){
                v2 = v[k2]; 
                if ( v2 !== null && typeof v2 !== 'object' && v2.length<16 ) {
if( tweetsMap[k] === null || tweetsMap[k] === undefined ) { tweetsMap[k]={}; }
if( tweetsMap[k][k2] === null || tweetsMap[k][k2] === undefined ) { tweetsMap[k][k2]={}; }
if( tweetsMap[k][k2][v] === null || tweetsMap[k][k2][v] === undefined ) { tweetsMap[k][k2][v]=v2; }
else { console.log( 'possibe error k='+k+'   k2='+k2+'   v='+v+'   exists' ); }
if( tweetsMap[k2] === null || tweetsMap[k2] === undefined ) { tweetsMap[k2]={}; }
if( tweetsMap[k2][k] === null || tweetsMap[k2][k] === undefined ) { tweetsMap[k2][k]={}; }
if( tweetsMap[k2][k][v] === null || tweetsMap[k2][k][v] === undefined ) { tweetsMap[k2][k][v]=v2; }
else { console.log( 'possibe error k='+k+'   k2='+k2+'   v='+v+'   exists' ); }
                } // if ( v !== null && typeof v !== 'objec
            } // for( let k2 of 
        } // if ( v !== null && typeof v === 'object' )
        else if( v !== null && typeof v !== 'object' && v.length<16) { 
if( tweetsMap[k] === null || tweetsMap[k] === undefined ) { tweetsMap[k]={}; }
if( tweetsMap[k][v] === null || tweetsMap[k][v]  === undefined ) { tweetsMap[k][v] =t; }
else { console.log( 'possibe error k='+k+'     v='+v+'   exists' ); }
            tweetsMap[k][v]=t; 
        } // else if( v !== null && typeof v !== 'object' && v.length<16) 
    } // for( let k of ka )
} // for( let t of tweets ) 


exports.keylist = function() {
    return new Promise((resolve, reject) => {
        resolve(Object.keys(tweets));
    });
};

exports.readId = function(key) {
    return new Promise((resolve, reject) => {
        if (tweets[key]) resolve(tweets[key]);
        else reject(`Note ${key} does not exist`);
    });
};

exports.readName = function(key) {
    return new Promise((resolve, reject) => {
        if ( Object.keys(tweetsMap['name']).indexOf(key) ) {
           resolve(tweetsMap['name'][key]); //users list 
        }
        else reject(`Note ${key} does not exist`);
    });
};

exports.t = tweets; //logs, to access by index use assgnName.t[i]
exports.tm = tweetsMap; //logs, to access by index use assgnName.t[i]
