'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const urlsSchema = new mongoose.Schema( {
    url: { type: String, unique: false },
    expanded_url: { type: String, unique: false },
    display_url: { type: String, unique: false }
} );

module.exports = mongoose.model('UrlsModel', urlsSchema );


