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
        bindToController: true
    };
}

function TodoItemCtrl($scope, $http) {
    var vm = this;

    $scope.updateCompleted = updateCompleted;
    vm.todoData = [];

    $scope.$watch(function () {
        return vm.todoData;
    }, function (newValue, oldValue) {
        if (newValue) {
            vm.todoData = newValue;
            $scope.todoData = vm.todoData;
        }
    });

    //console.log(vm);

    function updateCompleted(todo) {
        console.log("i was clicked");
        console.log(todo);

        $http.put('/api',
            todo
        ).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    }
}