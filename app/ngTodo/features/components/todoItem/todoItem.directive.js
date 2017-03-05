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

function TodoItemCtrl($scope) {
    var vm = this;

    vm.todoData = 'Hello';
    $scope.$watch(function () {
        return vm.todoData;
    }, function (newValue, oldValue) {
        if (newValue !== oldValue) {
            vm.todoData = newValue;
        }
    });
    console.log(vm);
}