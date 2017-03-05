angular
    .module('ngTodo', [
        'ui.router',
        'ngTodo.listTodo',
        'ngTodo.createTodo',
        'ngTodo.completeTodo',
        'ngTodo.component.navbar',
        'ngTodo.component.todoItem'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}