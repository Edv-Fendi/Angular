angular.module("MyFirstApp", [])
.controller("FirstController", ['$scope', '$http', function($scope, $http){
    $scope.posts = [];
    $scope. newPost = {};
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(data){
            console.log(data);
            $scope.posts = data.data;

        })
        .catch(function(err){

        });

        $scope.addPost = function(){
            $http.post("http://jsonplaceholder.typicode.com/posts", {
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            })
            .then(function(data, status, headers, config){ 
                console.log(data);
                $scope.posts.push($scope.newPost)
                $scope.addPost = {};
               

            })
            .catch(function(error, status, headers, config){
                console.log(error);
            })
        }
}]);
