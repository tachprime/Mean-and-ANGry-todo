angular
    .module('ngTodo.completeTodo')
    .controller('CompleteTodoCtrl', CompleteTodoCtrl);

function CompleteTodoCtrl($http) {
    var vm = this;
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