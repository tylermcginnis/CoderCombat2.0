var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket){
  socket.on('joinedRoom', function(obj){
    console.log(obj.text)
  });

  socket.on('joinedRoom', function(){
    alert("Someone joined the room!");
  })

  socket.on('leftRoom', function(obj){
    console.log(obj.text);
    alert("Someone left the room!");
  })
  $scope.test = 'set';
})