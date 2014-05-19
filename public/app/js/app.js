var app = angular.module('CC', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
   .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl',
    })
});
