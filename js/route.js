var myApp = angular.module('myApp', ['ngRoute', 'myApp.controller']);

myApp.config(['$routeProvider', function ($ruta) {
    $ruta.when('/', {
        templateUrl: 'view/lista.html',
        controller: 'CtrlCrudList'
    });
    $ruta.when('/lista', {
        templateUrl: 'view/lista.html',
        controller: 'CtrlCrudList'
    });
    $ruta.when('/nuevo', {
        templateUrl: 'view/nuevo.html',
        controller: 'CtrlCrudNew'
    });
    $ruta.when('/editar/:id', {
        templateUrl: 'view/editar.html',
        controller: 'CtrlCrudFind'
    });
    $ruta.otherwise({
        redirectTo: '/'
    });
}]);
