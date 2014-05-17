var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket){
  // socket.on('test', function(){
  //   alert('test happened');
  // })
  $scope.test = 'set';
})