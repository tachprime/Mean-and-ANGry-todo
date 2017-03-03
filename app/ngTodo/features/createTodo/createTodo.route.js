angular
    .module('ngTodo.createTodo')
    .config(createTodoConfig);

function createTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'create',
        url: '/create',
        templateUrl: 'ngTodo/features/createTodo/createTodo.html',
        controller: 'CreateTodoCtrl',
        controllerAs: 'CreateVM'
    });
}