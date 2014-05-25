var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket, initiateEditor){
  $scope.data = {};

  socket.on('joinedRoom', function(obj){
    $scope.waitingForOpponentModal.close();
  });

  socket.on('leftRoom', function(obj){
    console.log(obj.text);
    alert("Someone left the room!");
  });
});