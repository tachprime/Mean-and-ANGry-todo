angular
    .module('ngTodo', [
        'ui.router',
        'ngTodo.listTodo',
        'ngTodo.createTodo',
        'ngTodo.completeTodo',
        'ngTodo.component.navbar',
        'ngTodo.component.todoItem',
        'ngTodo.service.todoApi'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}