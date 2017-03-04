angular
    .module('ngTodo', [
        'ui.router',
        'ngTodo.listTodo',
        'ngTodo.createTodo',
        'ngTodo.completeTodo',
        'ngTodo.component.navbar'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}