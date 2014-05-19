var app = angular.module('CC');
app.controller('mainCtrl', function($scope, socket, initiateEditor){
  var newPromise = initiateEditor.makeRequest()
    .then(function(data){
      $scope.data = {};
      $scope.data.question = data.question;
      $scope.data.fn = data.fn;
    }, function(){
      console.log('An error occured in appController');
    });
    $scope.chainedPromise = newPromise;

  socket.on('joinedRoom', function(obj){
    console.log(obj.text)
    alert("Someone joined the room!");
  });

  socket.on('leftRoom', function(obj){
    console.log(obj.text);
    alert("Someone left the room!");
  });
})