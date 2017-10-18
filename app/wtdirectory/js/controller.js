var App = angular.module('WtDirectory', []);


App.controller('WTCtrl', function($scope, peoplesFactory){
  peoplesFactory.getPeoples().then(function(response){
              $scope.peoples = response.data;
       });
});



