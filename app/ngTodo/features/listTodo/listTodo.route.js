angular
    .module('ngTodo.listTodo')
    .config(listTodoConfig);

function listTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'list',
        url: '/',
        templateUrl: 'ngTodo/features/listTodo/listTodo.html',
        controller: 'ListTodoCtrl',
        controllerAs: 'ListVM'
    });
}