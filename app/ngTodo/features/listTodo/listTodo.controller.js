angular
    .module('ngTodo.listTodo')
    .controller('ListTodoCtrl', ListTodoCtrl);

function ListTodoCtrl($http) {
    var vm = this;

    $http
        .get('/api')
        .then(function(response) {
            console.log(response);
        });
}