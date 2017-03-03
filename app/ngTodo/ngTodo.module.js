angular
    .module('ngTodo', [
        'ui.router',
        'ngTodo.listTodo',
        'ngTodo.createTodo',
        'ngTodo.completeTodo'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}