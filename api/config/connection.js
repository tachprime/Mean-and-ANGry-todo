//jshint esversion:6
const mongoose = require('mongoose');
const promise = require('bluebird');

mongoose.Promise = promise;

mongoose.connect('mongodb://localhost/todos');

const db = mongoose.connection;

db.on('error', (err) => {
    console.log("error connecting to mongo", err);

    throw err;
});

db.once('open', () => {
    console.log("connected to Todos collection");
});

module.exports = db;