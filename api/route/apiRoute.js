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

    res.status(200).json({ fromApi: text });
});

module.exports = router;