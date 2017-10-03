var App = angular.module('WtDirectory', []);

App.controller('WtCtrl', function($scope, $http) {
  $http.get('todo.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});

