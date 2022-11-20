angular.module("MyFirstApp", [])
    .controller("FirstController", ['$scope', '$http', function ($scope, $http) {
        $scope.posts = [];
        $scope.loading = true;
        $http.get("http://jsonplaceholder.typicode.com/posts")
            .then(function (data) {
                console.log(data);
                $scope.posts = data.data;
                $scope.loading = false;


            })
            .catch(function (err) {
                $scope.loading = false;

            });

    }]);
