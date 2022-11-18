var app = angular.module("MyFirtApp", []);
app.controller("FirstController", function ($scope) {
    $scope.nombre = "Edvaldo";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "Salve",
            username: "Jorge"
        },
        {
            comentario: "Pessimo exemplo",
            username: "Edv"
        }
    ];
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});