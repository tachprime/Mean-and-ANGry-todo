angular
    .module('ngTodo.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E',
        scope: {
            navData: '@'
        },
        templateUrl: '/ngTodo/features/components/navbar/navbar.html',
        controller: NavbarCtrl,
        controllerAs: 'NavbarVM',
        bindToController: true
    };
}

function NavbarCtrl() {

}