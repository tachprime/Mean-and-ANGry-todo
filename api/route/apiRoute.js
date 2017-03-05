//jshint esversion:6
const express = require('express');
const router = express.Router();
const Todo = require('../model/todos.model');

router.get('/', (req, res) => {
    
    Todo.find({}, (err, todo) => {
        if (err) res.sendStatus(500);

        res.status(200).json(todo);
    });

});

router.post('/', (req, res) => {

    var newTodo = new Todo({
        todo: req.body.todo,
        dueDate: req.body.dueDate
    })
    .save();

    res.status(200).json(newTodo);
});

router.put('/', (req, res) => {

    var text = "updating a todo";

    console.log(text);

    Todo.update({ _id: req.body._id }, { $set: { completed: req.body.completed } },{new: false}, function(err, data) {
        if (err) console.log(err);
        
        console.log(data);

        res.json(data);
    });

});

module.exports = router;