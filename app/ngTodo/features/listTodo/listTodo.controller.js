angular
    .module('ngTodo.listTodo')
    .controller('ListTodoCtrl', ListTodoCtrl);

function ListTodoCtrl($http) {
    var vm = this;

    //get current Date & remove time to compare to Due dates
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    vm.currentDate = currentDate;
    vm.todos = [];

    $http
        .get('/api')
        .then(function(response) {

            for (var i = 0; i < response.data.length; i++) {
                vm.todos.push(new Todo(
                    response.data[i].todo,
                    response.data[i].dueDate,
                    response.data[i]._id
                ));
            }

        });
    
}

function Todo(todo, dueDate, id) {
    this.todo = todo;
    this.dueDate = dueDate;
    this._id = id;
}