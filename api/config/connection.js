//jshint esversion:6
const mongoose = require('mongoose');
const promise = require('bluebird');

mongoose.Promise = promise;

mongoose.connect('mongodb://heroku_9gks4stp:cpt0q0eq63144pph0u319ie0qc@ds137729.mlab.com:37729/heroku_9gks4stp');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log("error connecting to mongo", err);

    throw err;
});

db.once('open', () => {
    console.log("connected to Todos collection");
});

module.exports = db;