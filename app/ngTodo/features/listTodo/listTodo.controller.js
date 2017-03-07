angular
    .module('ngTodo.listTodo')
    .controller('ListTodoCtrl', ListTodoCtrl);

function ListTodoCtrl(todoApi) {
    var vm = this;
    vm.currentDate = getTodaysDate();

    //hold all todos
    vm.todos = [];

    todoApi.getTodos(vm.todos);
}

function getTodaysDate() {
    //get current Date & remove time to compare to only dates
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return currentDate;
}

