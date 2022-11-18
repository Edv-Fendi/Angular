var app = angular.module("MyFirtApp", []);
app.controller("FirstController", ["$scope", "$http", function (m, $http) {
    m.nombre = "Edvaldo";
    m.nuevoComentario = {};
    m.comentarios = [
        // {
        //     comentario: "Salve",
        //     username: "Jorge"
        // },
        // {
        //     comentario: "Pessimo exemplo",
        //     username: "Edv"
        // }
    ];
    m.agregarComentario = function(){
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
}]);