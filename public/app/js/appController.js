var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket, initiateEditor){
  $scope.data = {};

  socket.on('joinedRoom', function(obj){
    console.log('someone joined the room');
    $scope.waitingForOpponentModal && $scope.waitingForOpponentModal.close();
  });

  socket.on('leftRoom', function(obj){
    console.log('someone left the room')
  });
});