var App = angular.module('WtDirectory', []);

App.factory('peoplesFactory', function($http) {
   var peoplesFactory = [];
   
   factory.getPeoples = function () {
        peoplesFactory = 	[{
   		"name": "Dr. Amjad Abdullat",
   		"title": "Associate Dean of Undergraduate Programs for The College of Business and Professor of Computer Information Systems",
   		"dep": "Computer Information and Decision Management, Department of",
   		"building": "Classroom Center",
   		"room": "220 A",
   		"phone": "806-651-2443",
   		"email": "aabdullat@wtamu.edu",
   		"thumb": "/images/amjad-abdullat-bodyphoto.jpg",
   		"url": "/amjad-abdullat",
   		"expertise": "Information Technology and Middle Eastern Affairs and Conflict"
   	   }];  
        return peoplesFactory;  
   };

   return peoplesFactory;
});