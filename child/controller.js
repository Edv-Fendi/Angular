angular.module("MyFirstApp", [])
.run(function($rootScope){
    $rootScope.nombre = "Edv"
})
.controller("FirstController", function ($scope){
    $scope.nombre = "Testing";
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.nombre = "Hello";

        })
    }, 1000);
})
.controller("ChildController", function ($scope){

})