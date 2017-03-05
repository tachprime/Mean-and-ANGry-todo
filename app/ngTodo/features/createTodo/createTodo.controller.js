angular
    .module('ngTodo.createTodo')
    .controller('CreateTodoCtrl', CreateTodoCtrl);

function CreateTodoCtrl($http) {
    var vm = this;

    vm.todo = '';
    vm.dueDate = '';
    vm.status = '';
    vm.addTodo = addTodo;

    function addTodo(todo, dueDate) {

        vm.todo = todo;
        vm.dueDate = dueDate;

        var newTodo = {
            todo: vm.todo,
            dueDate: vm.dueDate
        };

        $http.post('/api',
            newTodo
        ).then(function (response) {
            console.log("new Todo added");
        }).catch(function (err) {
            console.log(err);
        });

        //reset form to blank after submission
        vm.todo = '';
        vm.dueDate = '';
    }
}