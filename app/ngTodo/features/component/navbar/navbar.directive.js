angular
    .module('ngTodo.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E',
        scope: {
            bookData: '@'
        },
        templateUrl: '/ngTodo/features/component/navbar/navbar.html',
        controller: NavbarCtrl,
        controllerAs: 'NavbarM',
        bindToController: true
    };
}

function NavbarCtrl() {

}