var myApp = angular.module('myApp.service', []);

myApp.service('serviceCrud', function($http) {
    var url_    = 'include/ajax/crudPersona.php' ;

    this.get = function(){
        var method_ = 'GET' ;
        var params_ = {'op': 'list'} ;

        return $http({url: url_, method: method_, params: params_}) ;
    };
    this.get_by_id = function(id){
        var method_ = 'GET' ;
        var params_ = {'op': 'edit', 'id': id} ;

        return $http({url: url_, method: method_, params: params_}) ;
    };
    this.del_by_id = function(id){
        var method_ = 'DELETE' ;
        var params_ = {'op': 'delete', 'id': id} ;

        return $http({url: url_, method: method_, params: params_}) ;
    };
    this.set = function(persona){
        var method_ = 'GET' ;
        var params_ = {'op': 'insert', 'name': persona.name, 'dni': persona.dni} ;

        return $http({url: url_, method: method_, params: params_}) ;
    };
    this.upd = function(persona){
        var method_ = 'GET' ;
        var params_ = {'op': 'update', 'id': persona.id, 'name': persona.name, 'dni': persona.dni} ;

        return $http({url: url_, method: method_, params: params_}) ;
    };
});