//jshint esversion:6
const mongoose = require('mongoose');
const db = require('../config/connection');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: String,
    dueDate: Date,
    completed: {type:Boolean, default:false}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;