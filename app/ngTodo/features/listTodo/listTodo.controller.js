angular
    .module('ngTodo.listTodo')
    .controller('ListTodoCtrl', ListTodoCtrl);

function ListTodoCtrl($http, $scope) {
    var vm = this;
    vm.currentDate = getTodaysDate();

    //hold all todos
    vm.todos = [];

    $http
        .get('/api')
        .then(function (response) {

            for (var i = 0; i < response.data.length; i++) {
                vm.todos.push(new Todo(
                    response.data[i].todo,
                    response.data[i].dueDate,
                    response.data[i].completed,
                    response.data[i]._id
                ));
            }

        });
}

function Todo(todo, dueDate, completed, id) {
    this.todo = todo;
    this.dueDate = dueDate;
    this.completed = completed;
    this._id = id;
}

function getTodaysDate() {
    //get current Date & remove time to compare to only dates
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return currentDate;
}

