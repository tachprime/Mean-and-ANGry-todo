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
        link: function(scope) {
            console.log(scope.todoData);
        }
    };
}

function TodoItemCtrl() {
    var vm = this;

    console.log(vm);
}