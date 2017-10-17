var App = angular.module('WtDirectory', []);

App.controller('WtCtrl', function($scope, $http) {
  $http.get('people.json')
    .then(function(res){
      $scope.peoples = res.data;   
      console.log($scope.peoples);
    });
});



