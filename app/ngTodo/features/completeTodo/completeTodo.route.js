angular
    .module('ngTodo.completeTodo')
    .config(completeTodoConfig);

function completeTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'complete',
        url: '/complete',
        templateUrl: 'ngTodo/features/completeTodo/completeTodo.html',
        controller: 'CompleteTodoCtrl',
        controllerAs: 'CompleteVM'
    });
}