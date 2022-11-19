angular.module("mainModule", [])
    .filter("removeHtml", function(){
        return function(text){
            return String(text).replace(/<[^>]+>/gm, "");
        }

    })
    .controller("FiltersController", function($scope){
        $scope.mi_html = {};
        $scope.mi_html.title = "Hola";
        $scope.mi_html.body = "Hola Mundo";
        $scope.costo = 2;
    })