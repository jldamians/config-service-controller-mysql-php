var myApp = angular.module('myApp.controller',['myApp.service']);

myApp.controller('CtrlCrudList', function($scope, serviceCrud, $location) {
    $scope.contacts = [];

    get() ;

    function get(){
	    serviceCrud.get().
	    success(function(data, status){
	    	$scope.contacts = data;
	    	console.log('listar data: ') ;
	    	console.log(data) ;
	    });
    };

    $scope.get = get ;

    $scope.delete = function (id) {
	    serviceCrud.del_by_id(id).
	    success(function(data, status){
	    	console.log('eliminar status : ' + status) ;
	    	get() ;
	    });
    };

    $scope.edit = function(id){
    	console.log('editar id : ' + id) ;
        $location.url('/editar/' + id) ;
    };
});

myApp.controller('CtrlCrudFind',function($scope, serviceCrud, $routeParams, $location){
	// inicializando variable en vacion
    $scope.newContact = [];

    // capturnado el "id" de la "url"
    var id = $routeParams.id ;

    // recuperando el registro que corresponde al "id"
    serviceCrud.get_by_id(id).
    success(function(data, status){
    	$scope.newContact = data[0] ;
    });

    // funciones
    $scope.update = function () {
	    serviceCrud.upd($scope.newContact).
	    success(function(data, status){
	    	console.log('actualizar contact: ') ;
	    	console.log($scope.newContact) ;

	    	$location.url('/');
	    });
    };

    $scope.cancel = function(){
        $location.path('/lista');
    };
});

myApp.controller('CtrlCrudNew',function($scope, serviceCrud, $location){
    $scope.save = function () {
	    serviceCrud.set($scope.newContact).
	    success(function(data, status){
	    	console.log('insertar contact: ') ;
	    	console.log($scope.newContact) ;

	    	$location.url('/');
	    });
    };
    $scope.cancel = function(){
        $location.url('/');
    };
});