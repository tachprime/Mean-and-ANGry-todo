angular
    .module('ngTodo.listTodo')
    .controller('ListTodoCtrl', ListTodoCtrl);

function ListTodoCtrl($http, $scope) {
    var vm = this;

    //get current Date & remove time to compare to Due dates
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    vm.currentDate = currentDate;

    //hold all todos
    vm.todos = [];

    //update completed todos
    //vm.updateCompleted = updateCompleted;

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

    // function updateCompleted(todo) {
    //     //console.log("i was clicked");
    //     $http.put('/api', todo)
    //         .then(function (res) {
    //             console.log(res);
    //         }, function (err) {
    //             console.log(err);
    //         });
    // }
}

function Todo(todo, dueDate, completed, id) {
    this.todo = todo;
    this.dueDate = dueDate;
    this.completed = completed;
    this._id = id;
}

