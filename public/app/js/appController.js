var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket){

  socket.on('joinedRoom', function(obj){
    console.log(obj.text)
    alert("Someone joined the room!");
  });

  socket.on('leftRoom', function(obj){
    console.log(obj.text);
    alert("Someone left the room!");
  });

  //This needs to be set ASAP
  //Maybe get all questions, save to array, then select at random?
  $scope.question = 'meh'
})