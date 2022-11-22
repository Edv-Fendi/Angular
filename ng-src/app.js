angular.module("CustomDirective", [])
.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value){
            element.css({
                "background-image": "url('"+value+"')",
                "background-size": "cover",
                "background-position": "center"
            })
        })
    }
})
.controller("AppCtrl", function($scope, $http){
    $http.get("https://api.github.com/users/Edv-Fendi/repos")
    .then(function(data){
        $scope.repos = data.data;
    })

    .catch(function(err){
        console.log(err);
    })

    
});