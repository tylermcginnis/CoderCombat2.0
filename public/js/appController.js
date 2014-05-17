var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket){
  socket.on('joinedRoom', function(obj){
    console.log(obj.name + ' joined room ' + obj.room)
  })
  $scope.test = 'set';
})