angular
    .module('ngTodo.component.todoItem')
    .directive('todoItem', TodoItem);

function TodoItem() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: '/ngTodo/features/components/todoItem/todoItem.html',
        controller: TodoItemCtrl,
        controllerAS: 'TodoVM',
        bindToController: true,
    };
}

function TodoItemCtrl($scope) {
    var vm = this;

    console.log($scope.todoData);

    console.log(vm);
}