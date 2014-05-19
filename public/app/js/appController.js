var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket){
  $scope.data = {};

  socket.on('joinedRoom', function(obj){
    console.log(obj.text)
    alert("Someone joined the room!");
  });

  socket.on('leftRoom', function(obj){
    console.log(obj.text);
    alert("Someone left the room!");
  });

  //Make a request and save the questions data to an array on a service.
  $scope.data.question = 'eventually this will be an array of questions';
  $scope.data.theFn = 'Eventually this will be the empty function'


})